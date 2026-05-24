import Image from "next/image";
import { clinicConfig } from "@/config/clinic";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="sobre" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        {/* Image Side */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageFrame}>
            <Image
              src="/images/leticia.png"
              alt="Leticia Terceiro - Esteticista Especialista"
              fill
              sizes="(max-width: 992px) 100vw, 440px"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Side */}
        <div className={styles.info}>
          <span className={styles.tagline}>A Especialista</span>
          <h2 className={styles.title}>Dra. Leticia Terceiro</h2>
          <span className={styles.subtitle}>Estética Avançada e Integrativa</span>
          <p className={styles.bio}>
            Com ampla experiência clínica e dedicação ao estudo da anatomia e fisiologia da pele, Leticia Terceiro é 
            reconhecida por sua abordagem humanizada e focada em resultados naturais. Acreditamos que a estética de 
            alta performance deve respeitar as particularidades de cada paciente, realçando o que há de melhor em 
            sua beleza original através de protocolos cientificamente comprovados e tecnologia de última geração.
          </p>

          {/* Qualification Highlights */}
          <div className={styles.highlights}>
            <div className={styles.highlightItem}>
              <i className={`fa-solid fa-graduation-cap ${styles.highlightIcon}`}></i>
              <div className={styles.highlightText}>
                <span className={styles.highlightTitle}>Especialista em Injetáveis</span>
                <span className={styles.highlightDesc}>Certificações nacionais e internacionais nos melhores protocolos.</span>
              </div>
            </div>
            <div className={styles.highlightItem}>
              <i className={`fa-solid fa-microscope ${styles.highlightIcon}`}></i>
              <div className={styles.highlightText}>
                <span className={styles.highlightTitle}>Tecnologia de Ponta</span>
                <span className={styles.highlightDesc}>Domínio em aparelhos como Endolaser, Ultraformer e tecnologias laser.</span>
              </div>
            </div>
            <div className={styles.highlightItem}>
              <i className={`fa-solid fa-heart ${styles.highlightIcon}`}></i>
              <div className={styles.highlightText}>
                <span className={styles.highlightTitle}>Atendimento Exclusivo</span>
                <span className={styles.highlightDesc}>Protocolos totalmente personalizados para cada paciente.</span>
              </div>
            </div>
            <div className={styles.highlightItem}>
              <i className={`fa-solid fa-certificate ${styles.highlightIcon}`}></i>
              <div className={styles.highlightText}>
                <span className={styles.highlightTitle}>Beleza Natural</span>
                <span className={styles.highlightDesc}>Compromisso inegociável com a harmonia e naturalidade nos resultados.</span>
              </div>
            </div>
          </div>

          <a href={clinicConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.ctaButton}`}>
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
