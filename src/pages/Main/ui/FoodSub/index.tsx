import { Button, PlusIcon } from "shared/ui";
import s from "./styles.module.sass";
import food from "../../images/food1.jpg";
import { observer } from "mobx-react-lite";
import { useModalStore } from "entities/Modal";
import { FoodSubText } from "../FoodSubText";
import { useCarouselStore } from "entities/Carousel";

export const FoodSub = observer(() => {
  const modal = useModalStore();
  const carousel = useCarouselStore();

  const sectionClass = `${s.section} ${
    carousel.activeIndex >= 9 ? s.active : ""
  }`;

  return (
    <section id="kitchen" className={sectionClass}>
      <div className={s.content}>
        <div className={s.top}>
          <span className={s.title}>
            <span className={s.word}>Богатый выбор блюд</span>
          </span>
          <FoodSubText />
        </div>
        <div className={s.bottom}>
          <span className={s.title}>
            <span className={s.word}>Кухня</span>
          </span>
          <div className={s.btns}>
            <Button
              link="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F6X5KGb0jylRwu1lcoIv7qfBU%2BTFQazOqnZs077FP7KSM5ij1vX2wa1oim1EFhQqQq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2FКУХНЯ%20Palce%205_160-230_6%20превью.pdf&name=КУХНЯ%20Palce%205_160-230_6%20превью.pdf&nosw=1"
              className={s.btn}
              variable="secondaryInvarion"
            >
              Меню
            </Button>
            <Button
              link="https://docviewer.yandex.ru/view/933172455/?*=8BOrCo74bKtAWpCP6kOQDixm3s97InVybCI6InlhLWRpc2stcHVibGljOi8vdU5ud1FVSmRJa00vdVY0M0JmZXNTbzUrTXZTSVZXMzcxZ3Z6cjZ2QzZNUlAvUG9ibEJJQ0I2cDJkbGVjUWs5UnEvSjZicG1SeU9Kb25UM1ZvWG5EYWc9PSIsInRpdGxlIjoiUGxhY2VfY3JhenkucGRmIiwibm9pZnJhbWUiOmZhbHNlLCJ1aWQiOiI5MzMxNzI0NTUiLCJ0cyI6MTY5NTcxNjUyMzcyMSwieXUiOiI2ODIwNTE4NzkxNjkzNDM5OTg3In0%3D"
              className={s.btn}
              variable="secondaryInvarion"
            >
              Crazy меню
            </Button>
          </div>
        </div>
      </div>
      <div className={s.food}>
        <img
          onClick={() => modal.handleOpenFoodModal()}
          src={food}
          alt="food"
        />
        <Button
          onClick={() => modal.handleOpenFoodModal()}
          type="rounded"
          variable="primary"
        >
          <PlusIcon />
        </Button>
      </div>
    </section>
  );
});
