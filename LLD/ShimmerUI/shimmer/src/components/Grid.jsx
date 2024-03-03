import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./shimmer";

export default function Grid() {
  const [memeArr, setMemeArr] = useState([]);

  async function fetchMeme() {
    const response = await fetch("https://meme-api.com/gimme/20");
    const result = await response.json();
    console.log(result);
    setMemeArr((prev) => [...prev, ...result.memes]);
  }

  useEffect(() => {
    fetchMeme();
  }, []);
  return (
    <div className="grid">
      {memeArr?.length === 0? <Shimmer/> :
        memeArr.map((item,i) => {
          return <Card key={i} item={item} />;
        })}
    </div>
  );
}
