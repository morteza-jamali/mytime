import type { HTMLAttributes, FunctionComponent } from "react";

export interface IMLComponentProps extends HTMLAttributes<HTMLDivElement> {}

export type IMLComponentFunction<T> = FunctionComponent<T>;

export interface IMLStyleFunction<T> {
  (props?: T): any;
}
