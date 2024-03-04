import React , {useState} from 'react';
import MemesData from '../assets/MemesData';

export default function Main(){

    const [meme,setmeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    });
    
    const [allMemeimages,setallMemeimages] = useState(MemesData);

    function buttonClick(){
        const memesArray = allMemeimages.data.memes;
        const randomnumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomnumber].url;
        setmeme(prevMeme => ({
            ...prevMeme,
            randomImage : url
        }));
    }


    return (
        <main>
            <div className='form'>
                <div className='form-input-container'>
                    <input
                    type="text"
                    placeholder="Top Text"
                    className="form-input"
                    ></input>

                    <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form-input"
                    ></input>
                </div>
                <button onClick={buttonClick}>Get random meme image</button>
            </div>

            <img src={meme.randomImage}></img>
        </main>
    )
}