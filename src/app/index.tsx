import { Main } from "../pages/Main";
import "./index.sass";
import { withProviders } from "./providers";

const App = () => {
  return <Main />;
};

export default withProviders(App);
