import { clinicConfig } from "@/config/clinic";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Column 1: About */}
        <div className={styles.aboutCol}>
          <div className={styles.logo}>
            <span className={styles.logoTitle}>{clinicConfig.name}</span>
            <span className={styles.logoSubtitle}>{clinicConfig.title}</span>
          </div>
          <p className={styles.aboutDesc}>
            Realçando sua beleza natural com o equilíbrio perfeito entre ciência, alta tecnologia e 
            atendimento premium. Especializada em rejuvenescimento facial e corporal com foco em resultados naturais.
          </p>
          <ul className={styles.socials}>
            <li>
              <a
                href={clinicConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Navigation links */}
        <div>
          <h4 className={styles.colTitle}>Navegação</h4>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <a href="#">Início</a>
            </li>
            <li className={styles.linkItem}>
              <a href="#procedimentos">Procedimentos</a>
            </li>
            <li className={styles.linkItem}>
              <a href="#tecnologia">Tecnologia</a>
            </li>
            <li className={styles.linkItem}>
              <a href="#sobre">Sobre Leticia</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contacts */}
        <div>
          <h4 className={styles.colTitle}>Contato</h4>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <i className={`fa-solid fa-location-dot ${styles.contactIcon}`}></i>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Endereço</span>
                <span>{clinicConfig.address}</span>
              </div>
            </li>
            <li className={styles.contactItem}>
              <i className={`fa-solid fa-phone ${styles.contactIcon}`}></i>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>WhatsApp</span>
                <a href={clinicConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
                  {clinicConfig.phone}
                </a>
              </div>
            </li>
            <li className={styles.contactItem}>
              <i className={`fa-solid fa-clock ${styles.contactIcon}`}></i>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Horários</span>
                <span>{clinicConfig.hours}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className={`container ${styles.bottom}`}>
        <span>
          &copy; {currentYear} {clinicConfig.name} {clinicConfig.title}. Todos os direitos reservados.
        </span>
        <ul className={styles.bottomLinks}>
          <li>
            <a href="#">Políticas de Privacidade</a>
          </li>
          <li>
            <a href="#">Termos de Uso</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
