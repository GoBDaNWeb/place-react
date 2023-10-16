import bg from "../../images/concept-bg.jpg";

import styles from "./styles.module.sass";

export const ConceptSubMobile = () => {
  return (
    <div className={`${styles.section} container `}>
      <div className={styles.top}>
        <h5>
          <span>Концептуальный </span>
          <span>Cocktail Club Place</span>
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
    </div>
  );
};
