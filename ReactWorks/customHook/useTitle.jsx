import { useEffect } from "react";

function useTitle(num) {
  useEffect(() => {
    document.title = `Number ${num}`;
  }, [num]);
}
export default useTitle;
