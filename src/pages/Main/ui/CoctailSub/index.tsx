import { Button, PlusIcon } from "shared/ui";
import s from "./styles.module.sass";
import coctail from "../../images/coctail1.jpg";
import { observer } from "mobx-react-lite";
import { useModalStore } from "entities/Modal";
import { CoctailSubText } from "../CoctailSubText";

export const CoctailSub = observer(() => {
  const modal = useModalStore();

  return (
    <section className={s.section}>
      <div className={s.content}>
        <div className={s.top}>
          <span className={s.title}>Разнообразие вкусов и впечатлений</span>
          <CoctailSubText />
        </div>
        <div className={s.bottom}>
          <span className={s.title}>коктейльная карта</span>
          <Button variable="secondary" className={s.btn}>
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
