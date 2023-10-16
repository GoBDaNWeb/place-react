import compose from "compose-function";
import { withLayout } from "./withLayout";
import { withStore } from "./withStore";
export const withProviders = compose(withStore, withLayout);
