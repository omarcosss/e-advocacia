import Section from "./Section";

const stats = [
  { value: "12 anos", label: "de atuação jurídica" },
  { value: "+1.800", label: "clientes atendidos" },
  { value: "6", label: "áreas do direito" },
  { value: "Maceió e online", label: "atendimento presencial e à distância" },
];

export default function ProvaSocial() {
  return (
    <Section className="bg-surface" contentClassName="flex flex-col gap-8">
      <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((item) => (
          <div key={item.label} className="flex flex-col gap-2">
            <dt className="order-2 text-text-secondary text-sm">{item.label}</dt>
            <dd className="order-1 font-brand text-4xl">{item.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
