import "./App.css";
import SearchHeader from "./SearchHeader";
import searchTerm from "./ApiCall";
import { useState } from "react";
import ImageList from "./ImageList";
function App() {
  const [imageList, setImageList] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchTerm(term);
    setImageList(result);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList images={imageList} />
    </div>
  );
}

export default App;
