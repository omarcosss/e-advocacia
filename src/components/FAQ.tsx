import { Plus } from "iconoir-react";
import Section from "./Section";

const questions = [
  {
    q: "Quanto custa a primeira conversa?",
    a: "Depende da modalidade. O valor é informado antes de qualquer contratação, sem cobranças escondidas.",
  },
  {
    q: "Vocês atendem online?",
    a: "Sim. Atendemos presencialmente em Maceió e por videoconferência para os demais estados.",
  },
  {
    q: "Preciso levar documentos na primeira conversa?",
    a: "Não. Basta um resumo do caso. A lista de documentos é enviada depois da análise inicial.",
  },
  {
    q: "Em quanto tempo recebo retorno?",
    a: "Respondemos as mensagens em até 1 dia útil.",
  },
  {
    q: "Minhas informações estão seguras?",
    a: "Sim. Os dados são tratados com sigilo, conforme a Política de Privacidade.",
  },
];

export default function FAQ() {
  return (
    <Section id="faq" className="bg-surface" contentClassName="flex flex-col gap-10 items-center">
      <h2 className="font-brand text-3xl font-bold text-center">Perguntas frequentes</h2>
      <div className="w-full max-w-3xl flex flex-col divide-y divide-border border-y border-border">
        {questions.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
              {item.q}
              <Plus
                aria-hidden="true"
                width={20}
                height={20}
                className="shrink-0 transition-transform duration-200 group-open:rotate-45"
              />
            </summary>
            <p className="pt-3 text-text-secondary">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
