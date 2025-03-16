import { useEffect, useState } from "react";
import CardWrapper from "./CardWrapper";
import Heading from "./Heading";
import ImageBox from "./Image"; 
import YesImage from "../assets/126.gif";

export default function Yes() {
  const [date, setDate] = useState("");

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  const handleSubmit = () => {
    if (date.trim()) {
      alert(`Date set to: ${date}`);
    } else {
      alert("Please enter a valid date!");
    }
  };

  return (
    <div className="bg-orange-400 flex flex-col justify-center items-center min-h-screen space-y-4 p-4">
      <CardWrapper>
        <Heading title="Dear! Let's Fix a Date" />
        <ImageBox link={YesImage} alt="Thank You" />

        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center items-center w-full">
          <input
            type="text"
            placeholder="Enter Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full sm:w-48 h-10 px-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 w-full sm:w-[100px] h-[50px] bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-600 transition"
          >
            Submit
          </button>
        </div>
      </CardWrapper>
    </div>
  );
}
