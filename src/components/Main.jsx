import React , {useState} from 'react';
import MemesData from '../assets/MemesData';

export default function Main(){

    const [meme,setmeme] = useState("https://i.imgflip.com/1g8my4.jpg");
   
    function buttonClick(){
        const memesArray = MemesData.data.memes;
        let randomnumber = Math.floor(Math.random() * memesArray.length)
        let url = memesArray[randomnumber].url;
        setmeme((meme)=> url)
    
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