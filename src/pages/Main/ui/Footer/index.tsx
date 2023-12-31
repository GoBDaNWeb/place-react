import {
  ArrowTopIcon,
  Button,
  TelegramIcon,
  VkIcon,
  WhatsAppIcon,
} from "shared/ui";
import s from "./styles.module.sass";
import { useSwiper } from "swiper/react";

export const Footer = () => {
  const swiper = useSwiper();

  return (
    <section id="contacts" className={s.section}>
      <div className={s.top}>
        <div className={s.animRow}>
          {[...Array(100)].map((_, index) => (
            <span key={index}>Place</span>
          ))}
        </div>
      </div>
      <div className={s.content}>
        <div className={s.left}>
          <div className={s.info}>
            <a href="tel:+7 (900) 003-90-44">+7 (900) 003-90-44</a>
            <span className={s.workMode}>
              Режим работы: <br /> Чт Пт Сб с 21:00 до 06:00
            </span>
          </div>
          <div className={s.address}>
            <span className={s.label}>Адрес:</span>
            <span className={s.value}>г. Сочи, ул. Войкова, д.3</span>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.top}>
            <div className={s.social}>
              <Button
                link="https://vk.com/place.sochi"
                type="rounded"
                variable="secondaryInvarion"
              >
                <VkIcon />
              </Button>
              <Button
                link="https://t.me/+79000039044"
                type="rounded"
                variable="secondaryInvarion"
              >
                <TelegramIcon />
              </Button>
              <Button
                link="https://api.whatsapp.com/send/?phone=79000039044&text&type=phone_number&app_absent=0"
                type="rounded"
                variable="secondaryInvarion"
              >
                <WhatsAppIcon />
              </Button>
            </div>
            <Button
              onClick={() => swiper?.slideTo(0)}
              type="rounded"
              variable="primary"
              className={s.toTop}
            >
              <ArrowTopIcon />
            </Button>
          </div>
          <div className={s.bottom}>
            <span className={s.copyright}>
              2023 © Place “Все права защищены”
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
