import { useEffect, useState } from "react";
import { motion } from "framer-motion"

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  console.log(mousePosition);

  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e) => {
      console.log(e);

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    },

    text: {   
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => {
    setCursorVariant("text")
  }

  const textLeave = () => {
    setCursorVariant("default")
  }

  return (
    <div className="h-screen bg-yellow-300 flex items-center justify-center">
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-7xl capitalize font-semibold">Hello world</h1>

      <motion.div variants={variants} animate={cursorVariant} className="bg-black h-[32px] w-[32px] rounded-full fixed top-0 left-0 pointer-events-none" />
    </div>
  );
}

export default App;
