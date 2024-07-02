import page from "../page.module.css";
import { useTranslations } from "next-intl";
import Cover from "@/features/cover/components/cover";
import Header from "@/features/header/components/header";
import Footer from "@/features/footer/components/footer";

export default function Home() {
  const translated = useTranslations("Index");

  return (
      <>
        <header>
          <Header/>
          <Cover/>
        </header>
        <main className={page.main}>{translated("title")}</main>
        <Footer/>
      </>
  );
}
