import { useCallback, useEffect, useRef, useState } from "react";
import MostImp from "./Main";
import { useNavigate } from "react-router-dom";


function Hero() {
  const [position, setPosition] = useState({ left: null, top: null });
  const containerRef = useRef(null);
  const yesBtnRef = useRef(null);
  const noBtnRef = useRef(null);
    const navigate = useNavigate();

  useEffect(() => {
    if (yesBtnRef.current && noBtnRef.current) {
      const yesBtnRect = yesBtnRef.current.getBoundingClientRect();
      setPosition({ left: yesBtnRect.right - yesBtnRect.left + 100, top: 25 });
    }
  }, []);

  const handleClick = useCallback(() => {
    if (containerRef.current && noBtnRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const noBtnRect = noBtnRef.current.getBoundingClientRect();

      const maxLeft = containerRect.width - noBtnRect.width;
      const maxTop = containerRect.height - noBtnRect.height;

      const newLeft = Math.floor(Math.random() * maxLeft);
      const newTop = Math.floor(Math.random() * maxTop);

      setPosition({ left: newLeft, top: newTop });
    }
  }, []);

  return (
    <div className="bg-orange-400 flex flex-col justify-center items-center min-h-screen p-4 space-y-5">
      <MostImp/>
      <div
        ref={containerRef}
        className="relative w-[300px] h-[100px] flex flex-row items-center p-4 overflow-hidden"
      >
        <button
          ref={yesBtnRef}
          onClick={()=>{navigate("/yes")}}
          className="px-4 py-2 w-[100px] h-[50px] bg-purple-700 text-white rounded-lg shadow-md hover:bg-white text-black transition"
        >
          Yes
        </button>
        <button
          ref={noBtnRef}
          onClick={handleClick}
          className="px-4 py-2  w-[100px] h-[50px] bg-purple-700 text-white rounded-lg shadow-md hover:bg-white text-black transition absolute"
          style={{ left: position.left, top: position.top }}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Hero;
