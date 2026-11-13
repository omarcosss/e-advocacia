import Section from "./Section";
import { SmoothAppear } from "./SmoothAppear";

const team = [
  {
    name: "Helena Duarte",
    role: "Sócia fundadora",
    areas: "Civil e Empresarial",
    oab: "OAB/AL nº 00000",
  },
  {
    name: "Rafael Lima",
    role: "Sócio",
    areas: "Trabalhista e Previdenciário",
    oab: "OAB/AL nº 00000",
  },
  {
    name: "Marina Torres",
    role: "Coordenadora",
    areas: "Família e Sucessões",
    oab: "OAB/AL nº 00000",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

export default function Equipe() {
  return (
    <Section id="equipe" className="bg-surface" contentClassName="flex flex-col gap-10 items-center">
      <div className="flex flex-col gap-3 text-center max-w-2xl">
        <h2 className="font-brand text-3xl font-bold">Quem vai cuidar do seu caso</h2>
        <p>Advogados com registro na OAB e atuação direta em cada processo.</p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {team.map((member, index) => (
          <SmoothAppear key={member.name} revealOnScroll delay={index / 10}>
            <li className="bg-background border border-border rounded-sm p-6 flex flex-col items-center text-center gap-3 h-full">
              <span
                aria-hidden="true"
                className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground font-brand text-2xl"
              >
                {initials(member.name)}
              </span>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-text-secondary">{member.role}</p>
              <p className="text-sm">{member.areas}</p>
              <p className="text-xs text-text-secondary">{member.oab}</p>
            </li>
          </SmoothAppear>
        ))}
      </ul>
    </Section>
  );
}
