"use client";
import { useEffect, useState } from "react";

const INTERACTABLES = [
  "A",
  "BUTTON",
  "INPUT",
  "TEXTAREA",
  "SELECT",
  "SPAN",
  "DETAILS",
  "SUMMARY",
  "AREA",
  "MENU",
];

const useMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY, target } = event;
      setHover(false);
      if (target && INTERACTABLES.includes(target.tagName)) {
        setHover(true);
      }
      setX(clientX);
      setY(clientY);
    };
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, [setX, setY, setHover]);

  return { x, y, hover };
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

const MOVE_SPEED = 0.05;
const HOVER_MULTIPLIER = 1.15;

export default function GridBackground() {
  const { xOffset, yOffset } = useAnimateBackground(MOVE_SPEED);
  const { x, y, hover } = useMouse();
  // Maybe I'll add like responsive background someday
  return (
    <div
      style={{
        transformOrigin: `${x}px ${y}px`,
        backgroundPositionX: x * MULTIPLIER + xOffset,
        backgroundPositionY: y * MULTIPLIER + yOffset,
        scale: hover ? HOVER_MULTIPLIER : 1,
      }}
      className="grid fixed top-0 left-0 w-full h-full"
    ></div>
  );
}
