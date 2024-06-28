import {ReactElement} from "react";
import { Readex_Pro } from "next/font/google";
import cover from "./cover.module.scss";

const readexPro = Readex_Pro({ subsets: ["latin"] });

export default function Cover(): ReactElement {
  return (
      <section className={cover.wrapper}>
        <div className={cover.content}>
          <div className={cover.title}>
            <h1 className={readexPro.className}>Facilitez la gestion du port et <strong>anticipez le risque d’abandon de bateaux !</strong></h1>
            <p><strong>Dockline est l'outil indispensable pour les gestionnaires de ports.</strong> Une plateforme innovante, dédiée à la
              gestion des bateaux abandonnés dans les ports de plaisance, qui simplifie, optimise et prévient des risques
              d’abandon. </p>
          </div>
          <div className={cover.image}></div>
        </div>
      </section>
  );
}