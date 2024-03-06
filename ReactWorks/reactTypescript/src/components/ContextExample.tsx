import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function ContextExample() {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.primary.main,
        color: theme.secondary.main,
      }}
    >
      ContextExample
    </div>
  );
}

export default ContextExample;
