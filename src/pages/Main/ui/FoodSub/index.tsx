import { Button, PlusIcon } from "shared/ui";
import s from "./styles.module.sass";
import food from "../../images/food1.jpg";
import { observer } from "mobx-react-lite";
import { useModalStore } from "entities/Modal";
import { FoodSubText } from "../FoodSubText";

export const FoodSub = observer(() => {
  const modal = useModalStore();

  return (
    <section className={s.section}>
      <div className={s.content}>
        <div className={s.top}>
          <span className={s.title}>Богатый выбор блюд</span>
          <FoodSubText />
        </div>
        <div className={s.bottom}>
          <span className={s.title}>Кухня</span>
          <div className={s.btns}>
            <Button className={s.btn} variable="secondaryInvarion">
              Меню
            </Button>
            <Button className={s.btn} variable="secondaryInvarion">
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
