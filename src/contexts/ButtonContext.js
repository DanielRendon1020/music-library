import { createContext } from "react";

export const ButtonContext = createContext({
  styling: {
    display: "flex",
    justifyContent: "space-between",
    width: "fit-content",
    // margin: "1rem auto",
  },
});
