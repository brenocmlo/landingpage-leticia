"use client";

import { useState } from "react";
import Image from "next/image";
import { clinicConfig } from "@/config/clinic";
import styles from "./Procedures.module.css";

export default function Procedures() {
  const [activeTab, setActiveTab] = useState(clinicConfig.procedures[0].id);

  const activeProcedure = clinicConfig.procedures.find((p) => p.id === activeTab) || clinicConfig.procedures[0];
  const activeIndex = clinicConfig.procedures.findIndex((p) => p.id === activeTab);

  // Helper to map procedure category to an icon
  const getTabIcon = (id) => {
    switch (id) {
      case "botox":
        return "fa-solid fa-face-smile-beam";
      case "preenchimento":
        return "fa-solid fa-wand-magic-sparkles";
      case "colageno":
        return "fa-solid fa-sparkles";
      case "endolaser":
        return "fa-solid fa-bolt";
      default:
        return "fa-solid fa-circle-chevron-right";
    }
  };

  return (
    <section id="procedimentos" className={`section ${styles.section}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Nossos Tratamentos</span>
          <h2 className="section-title">Escolha seu procedimento</h2>
          <p className="section-desc">
            Oferecemos as técnicas mais modernas do mercado de estética com foco em naturalidade e segurança.
          </p>
        </div>

        {/* Tabbed Grid Layout */}
        <div className={styles.grid}>
          {/* Left Sidebar Menu */}
          <div className={styles.sidebar}>
            {clinicConfig.procedures.map((proc) => (
              <button
                key={proc.id}
                className={`${styles.tabButton} ${activeTab === proc.id ? styles.activeTabButton : ""}`}
                onClick={() => setActiveTab(proc.id)}
              >
                <i className={`${getTabIcon(proc.id)} ${styles.tabIcon}`}></i>
                <span>{proc.name.split(" (")[0]}</span>
              </button>
            ))}
          </div>

          {/* Right Card Details */}
          <div className={styles.contentArea}>
            <div className={styles.procedureCard} key={activeProcedure.id}>
              {/* Image Side */}
              <div className={styles.imageWrapper}>
                <Image
                  src={activeProcedure.image}
                  alt={activeProcedure.name}
                  fill
                  sizes="(max-width: 992px) 100vw, 400px"
                />
              </div>

              {/* Info Side */}
              <div className={styles.info}>
                <span className={styles.stepIndicator}>
                  {activeIndex + 1} de {clinicConfig.procedures.length} • {activeProcedure.tag}
                </span>
                <h3 className={styles.title}>{activeProcedure.name}</h3>
                <p className={styles.description}>{activeProcedure.description}</p>

                <h4 className={styles.benefitsTitle}>Benefícios Principais:</h4>
                <ul className={styles.benefitsList}>
                  {activeProcedure.benefits.map((benefit, idx) => (
                    <li key={idx} className={styles.benefitItem}>
                      <i className="fa-solid fa-check"></i>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Footer Pricing / CTA */}
                <div className={styles.footerArea}>
                  <div>
                    <span className={styles.priceLabel}>Valor sugerido</span>
                    <span className={styles.priceValue}>R$ {activeProcedure.price}</span>
                    <span className={styles.priceSub}> / sessão</span>
                  </div>
                  <a
                    href={`${clinicConfig.whatsappUrl}&text=Olá%20Dra.%20Leticia,%20gostaria%20de%20saber%20mais%20sobre%20o%20tratamento%20de%20${encodeURIComponent(activeProcedure.name)}!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${styles.ctaButton}`}
                  >
                    Agendar Horário <i className="fa-brands fa-whatsapp" style={{ marginLeft: "6px" }}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
