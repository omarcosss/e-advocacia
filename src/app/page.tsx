import Hero from "@/components/Hero";
import ProvaSocial from "@/components/ProvaSocial";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import CtaRecorrente from "@/components/CtaRecorrente";
import ComoFunciona from "@/components/ComoFunciona";
import Equipe from "@/components/Equipe";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-start font-sans ">
      <div className="absolute top-0 left-0 h-dvh w-full bg-linear-to-b from-[#f0f0f0] dark:from-[#141414] to-transparent -z-1 "></div>
      <Hero />
      <ProvaSocial />
      <Sobre />
      <Servicos />
      <CtaRecorrente />
      <ComoFunciona />
      <Equipe />
      <Depoimentos />
      <FAQ />
      <Contato />
    </div>
  );
}
