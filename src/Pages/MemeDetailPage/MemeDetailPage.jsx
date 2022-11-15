import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Form from "../../Components/From/Form";
import Gallery from "../../Components/Gallery/Gallery";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { MemeTextsContext } from "../../contexts/MemeTextsContext";
import './MemeDetailPage.scss';
    

const MemeDetailPage = () => {
    const {idCharacter} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(idCharacter);
    console.log(location);
  const [memes, setMemes] = useState([]);
  const [memeTexts, setMemeTexts] = useState({topText: "", bottomText: ""})
  var filtered = memes.filter(function (meme) {  
    return meme.id === memes[0].id;
  });

  useEffect(() => {
    const getMemes = async () => {
      const resData = await axios.get("https://api.imgflip.com/get_memes");
      console.log(resData.data.data.memes);
      setMemes(resData.data.data.memes);
    };

    getMemes();
  }, []);

  return (
    <div>
      <MemeTextsContext.Provider value={{memeTexts, setMemeTexts}}>
        <Form />
        <Gallery list={filtered} />
        <button onClick={() => navigate("/Characters")}><i class="fa fa-times" aria-hidden="true"></i></button>
      </MemeTextsContext.Provider>
    </div>
  );
}

export default MemeDetailPage