"use client";
import { FadeProps } from "react-awesome-reveal";

export default function FadeDecorator(props: FadeProps) {
  return <div>{props.children}</div>;
}
