import styles from "./Faq.module.css";

export default function Faq() {
  const faqs = [
    {
      q: "O preenchimento labial dói?",
      a: "O procedimento é extremamente tolerável. Utilizamos uma pomada anestésica de alta potência antes da aplicação e, em alguns casos, fazemos bloqueio anestésico local (semelhante ao de dentista), garantindo total conforto. Além disso, a maioria dos preenchedores modernos já possui lidocaína (um anestésico) misturado em sua própria fórmula.",
    },
    {
      q: "Quanto tempo dura o efeito do Botox?",
      a: "A durabilidade média é de 4 a 6 meses. Esse tempo varia de acordo com o metabolismo de cada pessoa, força muscular da região tratada e hábitos de vida (atividade física intensa e exposição ao sol costumam acelerar a reabsorção). O ideal é fazer o retoque duas vezes ao ano para manter as rugas controladas.",
    },
    {
      q: "Como funciona a recuperação do Endolaser?",
      a: "Por ser um procedimento minimamente invasivo e sem cortes, a recuperação é muito rápida. É comum ter um leve inchaço, vermelhidão e pequenos hematomas na área tratada, que costumam regredir em poucos dias. A maioria das pacientes retorna às suas atividades cotidianas já no dia seguinte.",
    },
    {
      q: "O que são bioestimuladores de colágeno?",
      a: "São substâncias (como o ácido poli-L-lático ou hidroxiapatita de cálcio) que injetamos na derme profunda para fazer com que as células do seu próprio corpo aumentem expressivamente a produção de colágeno natural. Os resultados são graduais, duradouros (até 2 anos) e focados em restaurar a firmeza, elasticidade e espessura da pele de forma elegante.",
    },
  ];

  return (
    <section id="faq" className={`section ${styles.section}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Dúvidas Frequentes</span>
          <h2 className="section-title">Perguntas Comuns</h2>
          <p className="section-desc">
            Esclareça suas principais dúvidas sobre nossos procedimentos e sinta-se segura para sua avaliação.
          </p>
        </div>

        {/* Faq List Accordion */}
        <div className={styles.faqWrapper}>
          {faqs.map((faq, idx) => (
            <details key={idx} className={styles.disclosure} name="faq">
              <summary className={styles.summary}>
                <span>{faq.q}</span>
                <i className={`fa-solid fa-chevron-down ${styles.icon}`}></i>
              </summary>
              <div className={styles.content}>
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
