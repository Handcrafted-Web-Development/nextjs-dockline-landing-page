import Image from "next/image";
import {ReactElement} from "react";
import header from '../styles/header.module.scss';

export default function Header(): ReactElement {
  return (
      <div className={header.wrapper}>
        <div className={header.logo}>
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
              className={header.baseline}
              width={177}
              height={43}
              priority
          />
        </div>
        <div className={header.navigation}>
          <a className={header.contact} href={"/"}>
            Contactez-nous
          </a>
        </div>
      </div>
  );
}