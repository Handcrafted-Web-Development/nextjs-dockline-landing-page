import {ReactElement} from "react";
import {Readex_Pro} from "next/font/google";
import cover from "./cover.module.scss";
import Image from "next/image";

const readexPro = Readex_Pro({subsets: ["latin"], weight: "400"});

export default function Cover(): ReactElement {
  return (
      <section className={cover.wrapper}>
        <div className={cover.content}>
          <div className={cover.title}>
            <h1 className={readexPro.className}>
              Facilitez la gestion du port et <strong>anticipez le risque d’abandon de bateaux !</strong>
            </h1>
            <p><strong>Dockline est l'outil indispensable pour les gestionnaires de ports.</strong> Une plateforme
              innovante, dédiée à la gestion des bateaux abandonnés dans les ports de plaisance, qui simplifie, optimise
              et prévient des risques d’abandon.
            </p>
            <form method="POST">
              <input className={"newsletter"} type={"email"} placeholder={"Votre adresse e-mail..."}/>
              <button type={"submit"}>Tester gratuitement</button>
            </form>
          </div>
        </div>
        <div className={cover.image}>
          <Image src="/mockup-one.png" className={cover.mockup__one} alt={""} width={530} height={315}/>
          <Image src="/mockup-two.png" className={cover.mockup__two} alt={""} width={495} height={295}/>
        </div>
      </section>
  );
}