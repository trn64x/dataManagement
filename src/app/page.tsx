import CtaButton from "@/components/buttons/CtaButton";
import Header from "@/components/header/Header";
import TextGradient from "@/components/text/TextGradient";
import { Fade } from "react-awesome-reveal";
import Wave from "react-wavify";

export default function Home() {
  return (
    <>
      <Header />
      <main className="font-sans gap-8 p-8 flex flex-col gap-4 min-h-[80vh] items-center justify-center">
        <div className="flex flex-row gap-4 text-5xl">
          <Fade triggerOnce cascade damping={0.05}>
            Czym jest
          </Fade>
          <TextGradient>
            {" "}
            <Fade
              triggerOnce
              delay={500}
              className="font-bold"
              cascade
              damping={0.05}
            >
              eksabajt?
            </Fade>
          </TextGradient>
        </div>
        <ul className="gap-2 text-md max-w-lg flex-col flex list-disc pl-10">
          <Fade triggerOnce cascade damping={1} delay={1500}>
            <li>to kolejna jednostka informatyczna po petabajcie</li>
            <li>to jednostka wynosząca 10^18 bajta</li>
            <li>
              to ilość danych globalnie wysyłanych przez internet co godzinę
            </li>
            <li>
              co najważniejsze, to{" "}
              <span className="font-bold">grupa programistów</span>, z Opola,
              która{" "}
              <span className="font-bold">
                wyceni, zaprojektuje i zaprogramuje twoją stronę
              </span>
            </li>
          </Fade>
        </ul>
        <Fade delay={5500}>
          <CtaButton>Skontaktuj się z nami!</CtaButton>
        </Fade>
      </main>
      <Wave fill="url(#gradient)">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="oklch(0.627 0.194 149.214)" />
            <stop offset="90%" stopColor="#4bb651" />
          </linearGradient>
        </defs>
      </Wave>
    </>
  );
}
