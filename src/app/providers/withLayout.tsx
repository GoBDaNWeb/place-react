import { FC } from "react";
import { BaseLayout } from "../../widgets/Layouts";

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function WithLayoutComponent(props: T) {
    return (
      <BaseLayout>
        <Component {...props} />
      </BaseLayout>
    );
  };
};
