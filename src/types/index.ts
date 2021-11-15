import { IBareProps } from "@morajlab/react.components.bare";
import type { MLComponent } from "@morajlab/react.types.common";

export interface IMTComponentProps extends IBareProps {}

export type IMTComponentFunction<T> = MLComponent<T>;
