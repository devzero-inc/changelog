import { useEffect, useState } from "react";
import Logo from "./assets/devzero_logo.png";
import MarkdownComp from "./components/MarkdownComp";
import getChangeLogs from "../http/api";

interface dataType {
  path: string;
  date: string;
  version: string;
}

export default function App() {

  const [readmeData, setReadmeData] = useState<dataType[]>([]);

  useEffect(() => {
    getChangeLogs().then((data) => {
      if(data){
        setReadmeData(data.data);
      }
    });
  }, []);

  return (
    <div className="h-screen overflow-auto bg-cus-card text-black flex flex-col items-center gap-8 py-8">
      <div className=" px-8 py-6 rounded-3xl flex flex-col w-[45%] justify-between gap-8">
        <div className=" flex items-center justify-center ">
          <div className="flex items-center">
            <img className="w-24" src={Logo} alt="" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-custom-gradient p-2">
              Change Log
            </h1>
          </div>
        </div>
        <h1 className=" text-center text-gray-600">
          Track and explore the latest updates and improvements across your
          favorite software platforms with our comprehensive changelog website,
          your go-to source for all things new and enhanced.
        </h1>
      </div>
      <div className="  flex flex-col items-center justify-center">
        {readmeData?.map((ele, ind) => {
          return (
            <div className="flex gap-16 w-fit" key={ind}>
              <div className="flex flex-col gap-3 mt-5 font-bold">
                <div className=" text-nowrap text-purple-600 px-2 py-1 bg-purple-200 border border-purple-600 rounded flex items-center justify-around ">
                  <div className=" h-3 w-3 rounded-full bg-purple-600"></div>
                  <p>{ele.version}</p>
                </div>
                <div className=" -left-32 text-nowrap text-gray-600">{ele.date}</div>
              </div>
              <div className=" border-l border-gray-400 pl-16 relative pb-32 pt-4">
                <div className="w-3 h-3 bg-gray-400 rounded-full absolute top-0 -left-[7px]"></div>
                <MarkdownComp file={ele.path} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}