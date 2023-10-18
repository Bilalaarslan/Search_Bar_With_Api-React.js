import { useState } from "react";
import "./App.css";
import SearchImages from "./components/ApiStructure";
import SearchHeader from "./components/SearchHeader";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await SearchImages(term);
    setImages(result);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList 
      imagePlaceHolder={images}/>
    </div>
  );
}

export default App;
