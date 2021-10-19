import { IBareProps } from "@morajlab/ui-dev.react.component.basic.bare";
import type { MLComponent } from "@morajlab/ui-dev.react.type.common";

export interface IMTComponentProps extends IBareProps {}

export type IMTComponentFunction<T> = MLComponent<T>;
