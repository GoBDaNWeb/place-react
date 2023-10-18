import { observer } from "mobx-react-lite";

import { useScroll } from "shared/lib";

import bg from "../../images/coctail-bg.jpg";

import { Section } from "entities/Section";

export const Coctail = observer(() => {
  const [titleRef] = useScroll();

  return <Section titleRef={titleRef} bg={bg} title="Авторские коктейли" />;
});
