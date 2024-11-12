"use client";
import { GlobalProvider } from "@/lib/GlobalContext";
import Header from "./components/Header";

const Frontend = ({ children }) => {
  return (
    <>
      <GlobalProvider>
        <div className="min-h-screen relative bg-white">
          <Header />
          {children}
        </div>
      </GlobalProvider>
    </>
  );
};

export default Frontend;
