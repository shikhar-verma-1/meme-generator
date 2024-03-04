import React , {useState} from 'react';
import MemesData from '../assets/MemesData';

export default function Main(){

    const [meme,setmeme] = useState("https://i.imgflip.com/1g8my4.jpg");
    
    const [allMemeimages,setallMemeimages] = useState(MemesData);

    function buttonClick(){
        const memesArray = MemesData.data.memes;
        const randomnumber = Math.floor(Math.random() * memesArray.length)
        
        setmeme(memesArray[randomnumber].url);
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

            <img src={meme}></img>
        </main>
    )
}