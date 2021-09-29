import type {
  IMLComponentProps,
  IMLComponentFunction,
  IMLStyleFunction,
} from "~types";

export interface IBaseProps extends IMLComponentProps {}

export interface IBaseStyleProps {}

export type BaseComponent = IMLComponentFunction<IBaseProps>;

export type BaseStyle = IMLStyleFunction<IBaseStyleProps>;
