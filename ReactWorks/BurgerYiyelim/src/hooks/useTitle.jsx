import { useEffect } from "react";

function useTitle() {
  useEffect(() => {
    document.title = "Burger Yiyelim";
  });
}

export default useTitle;
