import { observer } from "mobx-react-lite";
import bg from "../../images/coctail-bg.jpg";
import { Section } from "entities/Section";

export const Coctail = observer(() => {
  return <Section bg={bg} title="Авторские коктейли" />;
});
