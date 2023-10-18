import { Button, PlusIcon } from "shared/ui";
import s from "./styles.module.sass";
import coctail from "../../images/coctail1.jpg";
import { observer } from "mobx-react-lite";
import { useModalStore } from "entities/Modal";
import { CoctailSubText } from "../CoctailSubText";
import { useCarouselStore } from "entities/Carousel";

export const CoctailSub = observer(() => {
  const modal = useModalStore();
  const carousel = useCarouselStore();

  const sectionClass = `${s.section} ${
    carousel.activeIndex >= 7 ? s.active : ""
  }`;

  return (
    <section id="coctail" className={sectionClass}>
      <div className={s.content}>
        <div className={s.top}>
          <p className={s.title}>
            <span className={s.wordWrapper}>
              <span className={s.word}>Разнообразие вкусов </span>
            </span>
            <span className={s.wordWrapper}>
              <span className={s.word}>и впечатлений</span>
            </span>
          </p>
          {/* <span className={s.title}>Разнообразие вкусов и впечатлений</span> */}
          <CoctailSubText />
        </div>
        <div className={s.bottom}>
          <span className={s.title}>
            <span className={s.word}>коктейльная карта</span>
          </span>
          <Button
            link="https://docviewer.yandex.ru/view/933172455/?page=2&*=zvaqx9Ty36v6kZlzE0Y941DoKf57InVybCI6InlhLWRpc2stcHVibGljOi8vNlg1S0diMGp5bFJ3dTFsY29JdjdxZkJVK1RGUWF6T3FuWnMwNzdGUDdLU001aWoxdlgyd2Exb2ltMUVGaFFxUXEvSjZicG1SeU9Kb25UM1ZvWG5EYWc9PTov0JHQsNGAIFBhbGNlIDEyMC0yMzBfXzYgIFdFQi5wZGYiLCJ0aXRsZSI6ItCR0LDRgCBQYWxjZSAxMjAtMjMwX182ICBXRUIucGRmIiwibm9pZnJhbWUiOmZhbHNlLCJ1aWQiOiI5MzMxNzI0NTUiLCJ0cyI6MTY5NTY1ODc5MzI1NSwieXUiOiI2ODIwNTE4NzkxNjkzNDM5OTg3In0%3D"
            variable="secondary"
            className={s.btn}
          >
            Барное меню
          </Button>
        </div>
      </div>
      <div className={s.coctail}>
        <img
          onClick={() => modal.handleOpenCoctailModal()}
          src={coctail}
          alt="coctail"
        />
        <Button
          onClick={() => modal.handleOpenCoctailModal()}
          type="rounded"
          variable="primary"
        >
          <PlusIcon />
        </Button>
      </div>
    </section>
  );
});
