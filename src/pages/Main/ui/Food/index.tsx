import { useScroll } from "shared/lib";
import bg from "../../images/food-bg.jpg";
import { Section } from "entities/Section";

export const Food = () => {
  const [titleRef] = useScroll();

  return <Section titleRef={titleRef} bg={bg} title="кухня" />;
};
