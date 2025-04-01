"use client";
import { FadeProps } from "react-awesome-reveal";

export default function FadeDecorator(props: FadeProps) {
  return <div className={props.className}>{props.children}</div>;
}
