import Image from "next/image";
import { clinicConfig } from "@/config/clinic";
import styles from "./Technology.module.css";

export default function Technology() {
  return (
    <section id="tecnologia" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        {/* Text/Specs Side */}
        <div className={styles.info}>
          <span className={styles.tagline}>Tecnologia de Ponta</span>
          <h2 className={styles.title}>Estética baseada em ciência e inovação</h2>
          <p className={styles.description}>
            Investimos constantemente nas melhores tecnologias do mundo para garantir que você tenha acesso a 
            tratamentos altamente seguros, eficientes e minimamente invasivos. O nosso grande destaque é o 
            **Endolaser (Endolift)**, que redefine o contorno facial e corporal sem a necessidade de cirurgias plásticas tradicionais.
          </p>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              </div>
              <div className={styles.featureText}>
                <span className={styles.featureTitle}>Efeito Lifting Imediato</span>
                <span className={styles.featureDesc}>A fibra laser estimula uma retração instantânea do tecido cutâneo (skin tightening).</span>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <i className="fa-solid fa-droplet-slash"></i>
              </div>
              <div className={styles.featureText}>
                <span className={styles.featureTitle}>Sem Cortes ou Cicatrizes</span>
                <span className={styles.featureDesc}>Procedimento realizado com anestesia local e agulhas ultrafinas, eliminando cicatrizes.</span>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <i className="fa-solid fa-fire-flame-curved"></i>
              </div>
              <div className={styles.featureText}>
                <span className={styles.featureTitle}>Quebra de Gordura Localizada</span>
                <span className={styles.featureDesc}>Ideal para redução da gordura na papada, abdômen, coxas e braços simultaneamente.</span>
              </div>
            </div>
          </div>

          <a href={clinicConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Conhecer Protocolos Tech
          </a>
        </div>

        {/* Image Side */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageFrame}>
            <Image
              src="/images/technology.png"
              alt="Procedimento de Endolaser na Clínica Leticia Terceiro"
              fill
              sizes="(max-width: 992px) 100vw, 460px"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
