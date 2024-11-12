"use client";
import { GlobalProvider } from "@/lib/GlobalContext";
import Header from "./components/Header";
<<<<<<< HEAD
import CreateProject from "./components/CreateProject";
import UpdateProject from "./components/UpdateProject";
import BackProject from "./components/BackProject";
import DeleteProject from "./components/DeleteProject";
=======
>>>>>>> a079b2581e6a11ace95b7777dcb4c2461406b8f3

const Frontend = ({ children }) => {
  return (
    <>
      <GlobalProvider>
        <div className="min-h-screen relative bg-white">
          <Header />
          {children}
<<<<<<< HEAD
          <CreateProject />
          <UpdateProject />
          <BackProject />
          <DeleteProject />
=======
>>>>>>> a079b2581e6a11ace95b7777dcb4c2461406b8f3
        </div>
      </GlobalProvider>
    </>
  );
};

export default Frontend;
