import { createStyle } from "../../utils";

const coverSize = {
  width: "100%",
  height: "100%",
};

export const Styles = createStyle({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    ...coverSize,
  },
  time: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "50px",
  },
  atropos: {
    flexGrow: 1,
  },
  layer: {
    position: "absolute",
    inset: 0,
    ...coverSize,
  },
});

export default Styles;
