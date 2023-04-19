import GifItem from "./GifItem";
import "./styles.css";
import { useEffect } from "react";
import { useState } from "react";
import { AddCategory } from "./AddCategory";

const getJSON = async () => {
  //console.log(category);
  const url = `https://jsonplaceholder.typicode.com/posts`;
  const resp = await fetch(url);
  const data = await resp.json();
  const gifs = data.map((img) => {
    return {
      userId: img.userId,
      id: img.id,
      title: img.title,
      body: img.body
    };
  });
  return gifs;
};

export default function App() {
  const [images, Setimages] = useState([]);

  //
  const defaultValue = [];
  const [categories, setCategories] = useState(defaultValue);

  const addCategory = (cualquiera) => {
    const auxCategories = [...categories];
    auxCategories.push(cualquiera);
    setCategories(auxCategories);
  };

  //

  const InvoGifs = async () => {
    const variablegifs = await getJSON();
    Setimages(variablegifs);
  };
  useEffect(() => {
    InvoGifs();
  }, []);

  return (
    <>
      <div className="App">
        <AddCategory onAddCategory={addCategory} />
        <div className="card-grid">
          {images.map((key2, key) => {
            return <GifItem key={key} {...key2} />;
          })}
        </div>
      </div>
    </>
  );
}
