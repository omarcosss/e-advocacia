import { ArrowRight, ChatBubble } from "iconoir-react";
import Image from "next/image";
import Button from "./Button";
import Section from "./Section";
import Link from "next/link";
import { SmoothAppear } from "./SmoothAppear";

export default function Hero() {
  return (
    <Section contentClassName="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="font-brand text-7xl">
          Assessoria jurídica estratégica com foco em resultados.
        </h1>
        <p className="px-1 flex flex-col gap-4">
          Atuação ética, transparente e personalizada para proteger seus
          direitos e orientar decisões com segurança.
          <span className="text-sm opacity-60 italic">
            Este site é um projeto fictício desenvolvido exclusivamente para fins de portfólio. As informações apresentadas não representam um escritório real.
          </span>
        </p>
        <div className="flex gap-6 mt-12">
          <SmoothAppear delay={0.1}>
            <Button>
              <ChatBubble width={20} height={20} />
              Fale com um advogado
            </Button>
          </SmoothAppear>
          <SmoothAppear delay={0.2}>
            <Button variant="secondary" asChild>
              <Link href={'#servicos'}>
                <ArrowRight width={20} height={20} />
                Conheça nossas áreas de atuação
              </Link>
            </Button>
          </SmoothAppear>
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <Image
          className="md:scale-130"
          src={"/advogados-hero.png"}
          width={520}
          height={520}
          alt="Imagem do time de advogados do escritório E Advocacia"
        />
      </div>
    </Section>
  );
}
