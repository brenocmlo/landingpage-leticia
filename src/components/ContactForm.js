"use client";

import { useState } from "react";
import { clinicConfig } from "@/config/clinic";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    procedure: clinicConfig.procedures[0].name,
    period: "Manhã",
  });

  // Handler for phone masking (XX) XXXXX-XXXX
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // remove non-digits
    
    if (value.length > 11) value = value.slice(0, 11);
    
    // Mask logic
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    
    setFormData({ ...formData, phone: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name.trim() || formData.phone.length < 14) {
      alert("Por favor, preencha seu nome e um número de WhatsApp válido.");
      return;
    }

    // Build structured message
    const baseText = `Olá Dra. Leticia! Gostaria de realizar um pré-agendamento de consulta:\n\n` +
      `• *Nome*: ${formData.name}\n` +
      `• *Procedimento*: ${formData.procedure}\n` +
      `• *Período de Preferência*: ${formData.period}\n` +
      `• *WhatsApp*: ${formData.phone}\n\n` +
      `Gostaria de verificar as datas disponíveis!`;

    // Construct URL redirect
    const whatsappLink = `https://wa.me/5511999999999?text=${encodeURIComponent(baseText)}`;
    
    // Open in new tab/window
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="agendamento" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        {/* Info Column */}
        <div className={styles.info}>
          <span className={styles.tagline}>Agende sua Consulta</span>
          <h2 className={styles.title}>Dê o primeiro passo para realçar sua beleza</h2>
          <p className={styles.description}>
            Preencha o formulário rápido ao lado com suas preferências. Nossa equipe entrará em contato 
            diretamente pelo seu WhatsApp para confirmar o melhor horário disponível e tirar todas as suas dúvidas.
          </p>

          <ul className={styles.benefitList}>
            <li className={styles.benefitItem}>
              <i className={`fa-solid fa-circle-check ${styles.benefitIcon}`}></i>
              <span>Avaliação facial personalizada inclusa</span>
            </li>
            <li className={styles.benefitItem}>
              <i className={`fa-solid fa-circle-check ${styles.benefitIcon}`}></i>
              <span>Retorno rápido em até 30 minutos em horário comercial</span>
            </li>
            <li className={styles.benefitItem}>
              <i className={`fa-solid fa-circle-check ${styles.benefitIcon}`}></i>
              <span>Ambiente clínico seguro e higienizado</span>
            </li>
          </ul>
        </div>

        {/* Form Container */}
        <div className={styles.formContainer}>
          <h3 className={styles.formTitle}>Pré-Agendamento Rápido</h3>
          <span className={styles.formSubtitle}>Escolha seu tratamento e horário preferido</span>

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Name */}
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Nome Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                placeholder="Ex: Mariana Silva"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Phone */}
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>Celular (WhatsApp)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={styles.input}
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
              />
            </div>

            {/* Procedure Select */}
            <div className={styles.formGroup}>
              <label htmlFor="procedure" className={styles.label}>Procedimento Desejado</label>
              <select
                id="procedure"
                name="procedure"
                className={styles.select}
                value={formData.procedure}
                onChange={handleInputChange}
              >
                {clinicConfig.procedures.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Period */}
            <div className={styles.formGroup}>
              <label htmlFor="period" className={styles.label}>Período de Preferência</label>
              <select
                id="period"
                name="period"
                className={styles.select}
                value={formData.period}
                onChange={handleInputChange}
              >
                <option value="Manhã (09h às 12h)">Manhã (09h às 12h)</option>
                <option value="Tarde (13h às 18h)">Tarde (13h às 18h)</option>
                <option value="Noite (18h às 20h)">Noite (18h às 20h)</option>
              </select>
            </div>

            <button type="submit" className={`btn ${styles.submitButton}`}>
              Solicitar Agendamento <i className="fa-brands fa-whatsapp"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
