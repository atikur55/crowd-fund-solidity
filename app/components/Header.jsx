import { HeartHandshake } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-white shadow-lg fixed top-0 left-0 right-0">
      <Link
        href="/"
        className="flex items-center justify-start text-xl text-black space-x-1"
      >
        <span>Crowd Funding</span>
        <HeartHandshake />
      </Link>

      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg"
        >
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
