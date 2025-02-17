import { useState } from 'react';
import './css/gamebody.css'
import GameCard from "./GameCard";
import Wrapper from './Wrapper';
import {gameOnOff, Ie, EmoData } from '../Interface';

export default function GameBody() {

    const [gameOn, setGameOn] = useState<gameOnOff>(false)
    const [emojiData, setEmojiData] = useState<EmoData[]>([])
       
    async function triggerGameStatus(e: Ie) {

        try {
            const response = await fetch("https://emojihub.yurace.pro/api/all/category/animals-and-nature")
            if(!response.ok) {
                throw new Error("Could not fetch data from API")
            }
            const data = await response.json()
            const shortedEmojies = data.slice(0,5)
            setEmojiData(shortedEmojies)

            setGameOn(true)

        } catch (err) {
            console.error(err)
        }
        
        e.preventDefault()
    }

    console.log(emojiData)
    function clickView() {
        console.log("Emoji Clicked")
    }
    
    return(
        <div className="game_body m-0 bg-info-subtle d-flex flex-column align-items-center justify-content-center p-1">
            <h1 className="m-3 p-2 border-2 rounded text-white bg-success">Memory Game</h1>
            {gameOn && <GameCard handelemojiClick={clickView} emojiData={emojiData} />}
            {!gameOn && <Wrapper handleSubmit={triggerGameStatus}/>}
        </div>
    )
}