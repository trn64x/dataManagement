import { PropsWithChildren } from "react";
import { FadeProps } from "react-awesome-reveal";

export default function Fade({children, className}:  FadeProps){
    return <div className={className}>{children}</div>
}