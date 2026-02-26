import {
  Building,
  ChatBubble,
  Community,
  HandCard,
  Suitcase,
  User,
} from "iconoir-react";
import type { ReactNode } from "react";
import Section from "./Section";
import { SmoothAppear } from "./SmoothAppear";

type InfoCardProps = {
  title: string;
  info: string;
  icon: ReactNode;
};

const InfoCard = ({ title, info, icon }: InfoCardProps) => {
  return (
    <div className="bg-background text-foreground border border-border flex flex-col gap-3 text-center rounded-sm px-5 py-7 h-full">
      <div className="text-accent flex justify-center">{icon}</div>
      <h3 className="font-bold">{title}</h3>
      <p>{info}</p>
    </div>
  );
};

const infoCards = [
  {
    title: "Direito Civil",
    info: "Atuação em contratos, indenizações, responsabilidade civil, cobranças e resolução de conflitos.",
    icon: <User width={32} height={32} />,
  },
  {
    title: "Direito Empresarial",
    info: "Consultoria jurídica para empresas, elaboração e revisão de contratos e apoio societário.",
    icon: <Building width={32} height={32} />,
  },
  {
    title: "Direito de Família",
    info: "Atuação em divórcios, pensão alimentícia, guarda, inventários e sucessões.",
    icon: <Community width={32} height={32} />,
  },
  {
    title: "Direito Trabalhista",
    info: "Assessoria em relações de trabalho, rescisões, verbas trabalhistas e defesa em reclamações.",
    icon: <Suitcase width={32} height={32} />,
  },
  {
    title: "Direito Previdenciário",
    info: "Orientação e acompanhamento em aposentadorias, benefícios e revisões junto ao INSS.",
    icon: <HandCard width={32} height={32} />,
  },
  {
    title: "Consultoria Jurídica",
    info: "Análise preventiva, pareceres técnicos e orientação estratégica para tomada de decisões.",
    icon: <ChatBubble width={32} height={32} />,
  },
];

export default function Servicos() {
  return (
    <Section
      contentClassName="flex flex-col gap-8 items-center "
      className="bg-surface"
      id="servicos"
    >
      <h2 className="font-brand text-3xl font-bold">Áreas de Atuação</h2>
      <p>
        Atuação jurídica especializada, com análise técnica e orientação
        estratégica conforme cada caso.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {infoCards.map((card, index) => (
          <SmoothAppear key={card.title} revealOnScroll delay={index/10}>
            <InfoCard
              title={card.title}
              info={card.info}
              icon={card.icon}
            />
          </SmoothAppear>
        ))}
      </div>
    </Section>
  );
}
