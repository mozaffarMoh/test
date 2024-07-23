"use client";
import { useEffect } from "react";
import {
  About,
  ContactUS,
  Footer,
  Header,
  Hero,
  Partners,
  Services,
} from "./components";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#home") {
        window.scrollTo(0, 0);
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Partners />
      <ContactUS />
      <Footer />
    </main>
  );
}
