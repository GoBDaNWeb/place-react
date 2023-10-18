import { useScroll } from "shared/lib";

import bg from "../../images/interior-bg.jpg";

import { Section } from "entities/Section";

export const Interior = () => {
  const [titleRef] = useScroll();

  return <Section titleRef={titleRef} bg={bg} title="интерьер" />;
};
