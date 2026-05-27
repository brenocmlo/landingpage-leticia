import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const reviews = [
    {
      initials: "MC",
      name: "Mariana Costa",
      treatment: "Toxina Botulínica (Botox)",
      rating: 5,
      text: "Resultado super natural! Eu tinha muito receio de ficar com o rosto congelado, mas a Leticia tem uma sensibilidade incrível. Suavizou minhas linhas da testa mantendo minha expressão. Atendimento nota mil!",
    },
    {
      initials: "BR",
      name: "Beatriz Ramos",
      treatment: "Preenchimento Labial",
      rating: 5,
      text: "Fiz o preenchimento labial e ficou maravilhoso! Meus lábios ganharam contorno e um volume extremamente elegante e proporcional. A Leticia é muito detalhista e cuidadosa, me senti super segura.",
    },
    {
      initials: "GS",
      name: "Gabriela Santos",
      treatment: "Endolaser Papada",
      rating: 5,
      text: "Estou chocada com o resultado do Endolaser na minha papada. Reduziu muito a gordura localizada e deu uma firmeza incrível na pele, parece até que fiz uma cirurgia plástica! Recuperação muito tranquila.",
    },
  ];

  return (
    <section id="depoimentos" className={`section ${styles.section}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Depoimentos</span>
          <h2 className="section-title">O que dizem nossas pacientes</h2>
          <p className="section-desc">
            A satisfação e autoimagem de nossas pacientes são nosso maior orgulho. Conheça algumas experiências reais.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={styles.grid}>
          {reviews.map((rev, idx) => (
            <div key={idx} className={styles.card}>
              {/* Header: Stars & Verified tag */}
              <div className={styles.header}>
                <div className={styles.stars}>
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <div className={styles.verifiedTag}>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Verificada</span>
                </div>
              </div>

              {/* Text */}
              <p className={styles.text}>"{rev.text}"</p>

              {/* Profile */}
              <div className={styles.profile}>
                <div className={styles.avatar}>{rev.initials}</div>
                <div className={styles.profileInfo}>
                  <span className={styles.name}>{rev.name}</span>
                  <span className={styles.treatment}>{rev.treatment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
