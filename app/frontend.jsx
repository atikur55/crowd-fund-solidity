"use client";
import { GlobalProvider } from "@/lib/GlobalContext";
import Header from "./components/Header";
import CreateProject from "./components/CreateProject";
import UpdateProject from "./components/UpdateProject";
import BackProject from "./components/BackProject";
import DeleteProject from "./components/DeleteProject";

const Frontend = ({ children }) => {
  return (
    <>
      <GlobalProvider>
        <div className="min-h-screen relative bg-white">
          <Header />
          {children}
          <CreateProject />
          <UpdateProject />
          <BackProject />
          <DeleteProject />
        </div>
      </GlobalProvider>
    </>
  );
};

export default Frontend;
