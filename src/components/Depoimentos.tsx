import Section from "./Section";
import { SmoothAppear } from "./SmoothAppear";

const testimonials = [
  {
    quote:
      "Fui bem orientada desde a primeira conversa. Entendi cada etapa do processo e o que esperar de cada uma.",
    author: "Cliente",
    area: "Direito de Família",
  },
  {
    quote:
      "Respostas claras, sem jargão. Me senti seguro durante todo o processo trabalhista.",
    author: "Cliente",
    area: "Direito Trabalhista",
  },
  {
    quote:
      "Atendimento sério e transparente para a nossa empresa. Hoje revisamos todos os contratos com a equipe.",
    author: "Empresário",
    area: "Direito Empresarial",
  },
];

export default function Depoimentos() {
  return (
    <Section id="depoimentos" contentClassName="flex flex-col gap-10 items-center">
      <div className="flex flex-col gap-3 text-center max-w-2xl">
        <h2 className="font-brand text-3xl font-bold">O que dizem os clientes</h2>
        <p className="text-sm opacity-60 italic">
          Depoimentos fictícios, para fins de portfólio.
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {testimonials.map((item, index) => (
          <SmoothAppear key={item.quote} revealOnScroll delay={index / 10}>
            <li className="border border-border rounded-sm p-6 flex flex-col gap-6 h-full">
              <blockquote className="flex-1">
                <p>&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <footer className="text-sm">
                <p className="font-bold">{item.author}</p>
                <p className="text-text-secondary">{item.area}</p>
              </footer>
            </li>
          </SmoothAppear>
        ))}
      </ul>
    </Section>
  );
}
