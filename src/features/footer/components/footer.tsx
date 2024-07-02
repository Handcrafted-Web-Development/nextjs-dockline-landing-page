import Image from "next/image";
import {ReactElement} from "react";
import footer from "../styles/footer.module.scss";
import { Kulim_Park } from "next/font/google";
import {useTranslations} from "next-intl";


export default function Cover(): ReactElement {
  const kulimPark = Kulim_Park({ subsets: ["latin"], weight: ["400"] });
  const translated = useTranslations("Footer");

  return (
      <section className={footer.wrapper}>
        <div className={footer.title}>
          <h2>{translated("title")}</h2>
        </div>
        <div className={footer.container}>
          <div className={footer.logo}>
            <Image
                src="/logo.svg"
                alt="Logo de Dockline"
                width={42}
                height={49}
                priority
            />
            <Image
                src="/dockline.svg"
                alt="Baseline du logo de Dockline"
                className={footer.baseline}
                width={177}
                height={43}
                priority
            />
          </div>
          <div className={footer.links}>
            <h3 className={kulimPark.className}>À propos</h3>
            <ul>
              <li>Notre solution</li>
              <li>Les tarifs</li>
              <li>Journal de bord</li>
            </ul>
          </div>
          <div className={footer.newsletter}>
            <h3 className={kulimPark.className}>Restez informés des nouveautés</h3>
          </div>
          <div className={footer.social__media}>

          </div>
        </div>
      </section>
  )
}