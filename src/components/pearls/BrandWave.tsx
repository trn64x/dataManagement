import Wave from "react-wavify";

export default function BrandWave(){
    return <Wave fill="url(#gradient)" className="relative from-[#4bb651] pt-4 bg-gradient-to-t ">
    <defs>
      <linearGradient id="gradient" gradientTransform="rotate(90)">
        <stop offset="10%" stopColor="oklch(0.627 0.194 149.214)" />
        <stop offset="90%" stopColor="#4bb651" />
      </linearGradient>
    </defs>
  </Wave>
}