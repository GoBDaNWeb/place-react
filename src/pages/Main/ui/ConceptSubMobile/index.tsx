import bg from "../../images/concept-bg.jpg";

import styles from "./styles.module.sass";

export const ConceptSubMobile = () => {
  return (
    <section id="concept" className={`${styles.section} container `}>
      <div className={styles.top}>
        <h5>
          <span>Коктейльный бар</span>
          <span>с танцевальной музыкой</span>
          <span>в центре Сочи</span>
        </h5>
      </div>
      <div className={styles.bottom}>
        <p>
          Место притяжения для самой изысканной публики, место стиля, место
          модной музыки от топовых диджеев.
        </p>
        <div className={styles.imageWrapper}>
          <img src={bg} alt="section-2" loading="lazy" />
        </div>
      </div>
    </section>
  );
};
