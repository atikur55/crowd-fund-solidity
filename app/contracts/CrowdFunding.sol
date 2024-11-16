// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract CrowdFunding {
    address public owner;
    uint public projectTax;
    uint public projectCount;
    uint public balance;
    statsStruct public stats;
    projectStruct[] projects;

    mapping(address => projectStruct[]) projectsOf;
    mapping(uint => backerStruct[]) backersOf;
    mapping(uint => bool) public projectExists;

    enum statusEnum {
        OPEN,
        APPROVED,
        REVERTED,
        DELETED,
        PAIDOUT
    }

    struct statsStruct {
        uint totalProjects;
        uint totalBacking;
        uint totalDonations;
    }

    struct backerStruct {
        address owner;
        uint contribution;
        uint timestamp;
        bool refunded;
    }

    struct projectStruct {
        uint id;
        address owner;
        string title;
        string description;
        string imageURL;
        uint cost;
        uint raised;
        uint timestamp;
        uint expiresAt;
        uint backers;
        statusEnum status;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    event Action(
        uint256 id,
        string actionType,
        address indexed executor,
        uint256 timestamp
    );

    constructor(uint _projectTax) {
        owner = msg.sender;
        projectTax = _projectTax;
    }

    function createProject(
        string memory _title,
        string memory _description,
        string memory _imageURL,
        uint _cost,
        uint _expiresAt
    ) public returns (bool) {
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(bytes(_description).length > 0, "Description cannot be empty");
        require(bytes(_imageURL).length > 0, "Image URL cannot be empty");
        require(_cost > 0 ether, "Cost cannot be zero");
        require(
            _expiresAt > block.timestamp,
            "Project cannot expire in the past"
        );

        projectStruct memory project;
        project.id = projectCount;
        project.owner = msg.sender;
        project.title = _title;
        project.description = _description;
        project.imageURL = _imageURL;
        project.cost = _cost;
        project.timestamp = block.timestamp;
        project.expiresAt = _expiresAt;

        projects.push(project);
        projectExists[projectCount] = true;
        projectsOf[msg.sender].push(project);
        stats.totalProjects += 1;

        emit Action(
            projectCount++,
            "PROJECT CREATED",
            msg.sender,
            block.timestamp
        );

        return true;
    }

    function updateProject(
        uint _id,
        string memory _title,
        string memory _description,
        string memory _imageURL,
        uint _expiresAt
    ) public returns (bool) {
        require(
            msg.sender == projects[_id].owner,
            "Only owner can update project"
        );
        require(projectExists[_id], "Project does not exist");
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(bytes(_description).length > 0, "Description cannot be empty");
        require(bytes(_imageURL).length > 0, "Image URL cannot be empty");

        projects[_id].title = _title;
        projects[_id].description = _description;
        projects[_id].imageURL = _imageURL;
        projects[_id].expiresAt = _expiresAt;
        emit Action(_id, "PROJECT UPDATED", msg.sender, block.timestamp);

        return true;
    }

    function deleteProject(uint _id) public returns (bool) {
        require(
            projects[_id].owner == msg.sender,
            "Only owner can delete project"
        );

        require(projects[_id].status == statusEnum.OPEN, "Project is not open");
        projects[_id].status = statusEnum.DELETED;

        performRefunds(_id);

        emit Action(_id, "PROJECT DELETED", msg.sender, block.timestamp);

        return true;
    }

    function performRefunds(uint id) internal {
        for (uint i = 0; i < backersOf[id].length; i++) {
            address _owner = backersOf[id][i].owner;
            uint _contribution = backersOf[id][i].contribution;

            backersOf[id][i].refunded = true;
            backersOf[id][i].timestamp = block.timestamp;
            payTo(_owner, _contribution);

            stats.totalBacking -= 1;
            stats.totalDonations -= _contribution;
        }
    }

    function backProject(uint _id) public payable returns (bool) {
        require(msg.value > 0 ether, "Cannot back project with zero value");
        require(projectExists[_id], "Project does not exist");
        require(projects[_id].status == statusEnum.OPEN, "Project is not open");

        stats.totalBacking += 1;
        stats.totalDonations += msg.value;
        projects[_id].raised += msg.value;
        projects[_id].backers += 1;

        backersOf[_id].push(
            backerStruct(msg.sender, msg.value, block.timestamp, false)
        );

        emit Action(_id, "PROJECT BACKED", msg.sender, block.timestamp);

        if (projects[_id].raised >= projects[_id].cost) {
            projects[_id].status = statusEnum.APPROVED;
            balance += projects[_id].raised;
            performPayout(_id);
            return true;
        }

        if (block.timestamp >= projects[_id].expiresAt) {
            projects[_id].status = statusEnum.REVERTED;
            performRefunds(_id);
            return true;
        }

        return true;
    }

    function performPayout(uint _id) internal {
        uint raised = projects[_id].raised;
        uint tax = (raised * projectTax) / 100;

        projects[_id].status = statusEnum.PAIDOUT;

        payTo(projects[_id].owner, (raised - tax));
        payTo(owner, tax);
        balance -= projects[_id].raised;
        emit Action(_id, "PROJECT PAIDOUT", msg.sender, block.timestamp);
    }

    function requestRefund(uint _id) public returns (bool) {
        require(
            projects[_id].status != statusEnum.REVERTED ||
                projects[_id].status != statusEnum.DELETED,
            "Project is not approved"
        );
        projects[_id].status = statusEnum.REVERTED;
        performRefunds(_id);
        emit Action(
            _id,
            "PROJECT REFUND REQUESTED",
            msg.sender,
            block.timestamp
        );
        return true;
    }

    function payOutProject(uint _id) public returns (bool) {
        require(
            projects[_id].status == statusEnum.APPROVED,
            "Project is not approved"
        );
        require(projects[_id].raised >= balance, "Not enough balance");
        require(msg.sender == projects[_id].owner, "Only owner can payout");
        performPayout(_id);
        return true;
    }

    function changeTax(uint _taxPct) public onlyOwner {
        projectTax = _taxPct;
    }

    function getProject(uint _id) public view returns (projectStruct memory) {
        require(projectExists[_id], "Project does not exist");
        return projects[_id];
    }

    function getProjects() public view returns (projectStruct[] memory) {
        return projects;
    }

    function getBackers(uint _id) public view returns (backerStruct[] memory) {
        return backersOf[_id];
    }

    function payTo(address _to, uint256 _amount) internal {
        (bool success, ) = payable(_to).call{value: _amount}("");
        require(success, "Payment failed");
    }
}
