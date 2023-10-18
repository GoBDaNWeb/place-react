import { useScroll } from "shared/lib";
import bg from "../../images/afisha-bg.jpg";
import { Section } from "entities/Section";

export const Afisha = () => {
  const [titleRef] = useScroll();

  return <Section titleRef={titleRef} bg={bg} title="афиша" />;
};
