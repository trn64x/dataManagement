"use client";
import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setX(clientX);
      setY(clientY);
    };
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, [setX, setY]);

  return { x, y };
};
const MULTIPLIER = 0.05;

const useAnimateBackground = (change = 0.1) => {
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setXOffset((val) => val + change);
      setYOffset((val) => val + change);
    }, 1);
    return () => clearInterval(interval);
  }, [setXOffset, setYOffset, change]);

  return { xOffset, yOffset };
};

export default function GridBackground() {
  const { xOffset, yOffset } = useAnimateBackground(0.05);
  const { x, y } = useMousePosition();
  // Maybe I'll add like responsive background someday
  return (
    <div
      style={{
        backgroundPositionX: x * MULTIPLIER + xOffset,
        backgroundPositionY: y * MULTIPLIER + yOffset,
      }}
      className="grid fixed top-0 left-0 w-full h-full"
    ></div>
  );
}
