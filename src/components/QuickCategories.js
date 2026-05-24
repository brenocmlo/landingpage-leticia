import styles from "./QuickCategories.module.css";

export default function QuickCategories() {
  const categories = [
    {
      icon: "fa-solid fa-face-smile-beam",
      title: "Rugas e Expressão",
      subtitle: "Botox Avançado",
    },
    {
      icon: "fa-solid fa-wand-magic-sparkles",
      title: "Contorno e Volume",
      subtitle: "Preenchimentos",
    },
    {
      icon: "fa-solid fa-sparkles",
      title: "Firmeza da Pele",
      subtitle: "Bioestimuladores",
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Tecnologia de Ponta",
      subtitle: "Endolaser corporal/facial",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {categories.map((cat, idx) => (
          <div key={idx} className={styles.item}>
            <div className={styles.badge}>
              <i className={cat.icon}></i>
            </div>
            <span className={styles.title}>{cat.title}</span>
            <span className={styles.subtitle}>{cat.subtitle}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
