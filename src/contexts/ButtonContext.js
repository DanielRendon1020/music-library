import { createContext } from "react";

export const ButtonContext = createContext({
  stylingDiv: {
    display: "flex",
    justifyContent: "space-between",
    
    
  },
  stylingBtn: {
    margin: "1rem",
    width: "fit-content",
  }
});
