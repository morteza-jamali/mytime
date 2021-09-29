import type {
  IMLComponentProps,
  IMLComponentFunction,
  IMLStyleFunction,
} from "~types";

export interface IAppProps extends IMLComponentProps {}

export interface IAppStyleProps {}

export type AppComponent = IMLComponentFunction<IAppProps>;

export type AppStyle = IMLStyleFunction<IAppStyleProps>;
