import TextGradient from "@/components/text/TextGradient";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <main className="gap-8 flex flex-col gap-4">
      <div className="flex flex-row gap-4 text-5xl">
        <Fade cascade damping={0.05}>
          Czym jest
        </Fade>
        <TextGradient>
          {" "}
          <Fade delay={500} className="font-bold" cascade damping={0.05}>
            eksabajt?
          </Fade>
        </TextGradient>
      </div>
      <ul className="gap-2 text-md max-w-lg flex-col flex list-disc pl-4">
        <Fade cascade damping={1} delay={1500}>
          <li>to kolejna jednostka informatyczna po petabajcie</li>
          <li>to jednostka wynosząca 10^18 bajta</li>
          <li>
            to ilość danych globalnie wysyłanych przez internet co godzinę
          </li>
          <li className="text-lg">
            co najważniejsze, to{" "}
            <span className="font-bold">grupa programistów</span>, z Opola,
            która{" "}
            <span className="font-bold">
              wyceni, zaprojektuje i zaprogramuje twoją stronę
            </span>
          </li>
        </Fade>
      </ul>
    </main>
  );
}
