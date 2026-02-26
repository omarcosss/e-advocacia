import Image from "next/image";
import Section from "./Section";

export default function Sobre() {
    return(
        <Section contentClassName="grid grid-cols-1 md:grid-cols-2 gap-8" id="sobre">
            <div className="w-full rounded-lg overflow-hidden">
                <Image className="aspect-auto min-w-full min-h-full" src={'/photo2.png'} width={500} height={500} alt=""/>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <h2 className="font-brand text-3xl font-bold">Sobre o E Advocacia</h2>
                <p>No escritório E Advocacia, nossa paixão pelo que fazemos é evidente em cada ação. Nossa equipe, composta por profissionais altamente dedicados, está sempre pronta para enfrentar os desafios que surgem, assegurando que cada cliente receba a orientação jurídica mais eficaz e personalizada. Aqui, a excelência não é apenas um objetivo, mas sim um compromisso diário, e a busca pela justiça é a nossa verdadeira missão! Estamos sempre prontos para lutar pelos direitos de nossos clientes, com a certeza de que cada caso é tratado com a máxima seriedade e atenção.</p>
            </div>
        </Section>
    )
}