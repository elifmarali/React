import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImages from "./Api";
import ImageList from "./ImageList";
import { useState } from "react";
function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceholder={images} />
    </div>
  );
}

export default App;
