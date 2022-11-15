import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Form from "../../Components/From/Form";
import Gallery from "../../Components/Gallery/Gallery";
import { MemeTextsContext } from "../../contexts/MemeTextsContext";


const MemesPage = () => {
  const [memes, setMemes] = useState([]);
  const [memeTexts, setMemeTexts] = useState({topText: "", bottomText: ""})

  useEffect(() => {
    const getMemes = async () => {
      const resData = await axios.get("https://api.imgflip.com/get_memes");
      setMemes(resData.data.data.memes);
    };

    getMemes();
  }, []);

  return (
    <div>
      <MemeTextsContext.Provider value={{memeTexts, setMemeTexts}}>
        <Form />
        <Gallery list={memes} />
      </MemeTextsContext.Provider>
    </div>
  );
}

export default MemesPage