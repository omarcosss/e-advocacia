import { ChatBubble, Check, Search } from "iconoir-react";
import Section from "./Section";
import { SmoothAppear } from "./SmoothAppear";

const steps = [
  {
    icon: ChatBubble,
    title: "Conte seu caso",
    text: "Envie uma mensagem ou fale pelo WhatsApp com um resumo da situação.",
  },
  {
    icon: Search,
    title: "Análise inicial",
    text: "Um advogado avalia documentos e prazos e explica as possíveis saídas.",
  },
  {
    icon: Check,
    title: "Plano de ação",
    text: "Você recebe a estratégia e o custo estimado, e decide com segurança como seguir.",
  },
];

export default function ComoFunciona() {
  return (
    <Section id="como-funciona" contentClassName="flex flex-col gap-10 items-center">
      <div className="flex flex-col gap-3 text-center max-w-2xl">
        <h2 className="font-brand text-3xl font-bold">Como funciona</h2>
        <p>Um processo simples, do primeiro contato até a definição do caminho.</p>
      </div>
      <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <SmoothAppear key={step.title} revealOnScroll delay={index / 10}>
              <li className="flex flex-col gap-4 h-full border-t-2 border-accent pt-6">
                <span className="text-sm text-text-secondary">Passo {index + 1}</span>
                <div className="text-accent">
                  <Icon width={28} height={28} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg">{step.title}</h3>
                <p>{step.text}</p>
              </li>
            </SmoothAppear>
          );
        })}
      </ol>
    </Section>
  );
}
