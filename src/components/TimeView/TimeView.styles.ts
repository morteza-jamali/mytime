import { createStyles } from "../../utils";

const layer = {
  position: "absolute",
  inset: 0,
};

export const Styles = createStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
  },
  time: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "50px",
    ...layer,
  },
  atropos: {
    flexGrow: 1,
  },
  layer,
});

export default Styles;
