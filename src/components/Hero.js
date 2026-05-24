import Image from "next/image";
import { clinicConfig } from "@/config/clinic";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.grid}`}>
        {/* Content Side */}
        <div className={styles.content}>
          <span className={styles.tagline}>Estética Avançada Facial e Corporal</span>
          <h1 className={styles.title}>
            Realce sua beleza natural com <span className={styles.titleHighlight}>tecnologia</span> e sofisticação.
          </h1>
          <p className={styles.description}>
            Clínica especializada em tratamentos estéticos personalizados. Oferecemos procedimentos de ponta como 
            Botox, Preenchimento Labial, Bioestimuladores de Colágeno e o revolucionário Endolaser, todos sob a 
            condução dedicada da esteticista especialista Leticia Terceiro.
          </p>
          <div className={styles.actions}>
            <a href={clinicConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Agendar Avaliação
            </a>
            <a href="#procedimentos" className="btn btn-outline">
              Conhecer Tratamentos
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageFrame}>
            <Image
              src="/images/hero.png"
              alt="Mapeamento facial clínico Leticia Terceiro"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 992px) 100vw, 480px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
