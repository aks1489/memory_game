import { useEffect, useState } from 'react';
import './css/gamebody.css'
import GameCard from "./GameCard";
import Wrapper from './Wrapper';
import {gameOnOff, Ie, EmoData, IRandomNumber, ISelectedCards, } from '../Interface';
import GameOver from './GameOver';
import GameStatus from './GameStatus';

export default function GameBody() {

    const [gameOn, setGameOn] = useState<gameOnOff>(false)
    const [emojiData, setEmojiData] = useState<EmoData[]>([])
    const [selectedCards, setSelectedCards] = useState<ISelectedCards >([])
    const [matchedCards, setMatchedCards] = useState<ISelectedCards>([])
    const [isGameOver, setIsGameOver] = useState<boolean>(false)
    const [allCardsMatched, setAllCardsMatched] = useState<boolean>(false)
      
    useEffect(() => {
        if(selectedCards.length === 2 && selectedCards[0].name === selectedCards[1].name) {
            setMatchedCards(prvMatchedCards => [...prvMatchedCards,...selectedCards])
        }
    },[selectedCards])

    useEffect(() => {
        if(emojiData.length && matchedCards.length === emojiData.length) {
            setIsGameOver(true)
        }
    },[matchedCards])

    useEffect(() => {
        if(selectedCards.length && matchedCards.length === emojiData.length) {
            setAllCardsMatched(true)
        }
    },[matchedCards])

    console.log(isGameOver)

    async function triggerGameStatus(e: Ie) {

        try {
            const response = await fetch("https://emojihub.yurace.pro/api/all/category/animals-and-nature")
            if(!response.ok) {
                throw new Error("Could not fetch data from API")
            }
            const data = await response.json()
            const shortedEmojies = getSliceData(data)
            const shuffeldEmojies = emojiArray(shortedEmojies)

            setEmojiData(shuffeldEmojies)

            setGameOn(true)

        } catch (err) {
            console.error(err)
        }
        
        e.preventDefault()
    }

    //Shuffling The emoji array using **Fisher-Yates algorithm
    function emojiArray(data: any) {
        const Emoji = [...data, ...data]

        for (let i = Emoji.length - 1; i>0 ; i--){
            const j = Math.floor(Math.random() * (i + 1))
            const t = Emoji[i]
            Emoji[i] = Emoji[j]
            Emoji[j] = t
        }

        return Emoji
    }

    //setting random emoji data
    function getSliceData(data: []) {
        const randomElement: IRandomNumber = getRandomNumberArray(data)
        const dataShort = randomElement.map( ele => data[ele])
        return dataShort
    }


    // creating random 5 array element numbers
    function getRandomNumberArray(data: IRandomNumber) {
        const randomArray: IRandomNumber = [];
        for(let i = 0; i <= 4; i++) {
            const randomNum = Math.floor(Math.random() * data.length)
            if(!randomArray.includes(randomNum)){
                randomArray.push(randomNum);
            } else {
                i--
            }
        }
        return randomArray;
    }

    function clickView(name: string,index :number) {
        // setSelectedCards([{name,index}])
        

        if(selectedCards.length < 2) {
            setSelectedCards(prvSelectedCards => [...prvSelectedCards, {name,index}])
        } else if(selectedCards.length === 2){
            setSelectedCards([{name,index}])
        }
        console.log(selectedCards)
    }
    
    return(
        <div className="game_body m-0 bg-info-subtle d-flex flex-column align-items-center justify-content-center p-1">
            <h1 className="m-3 p-2 border-2 rounded text-white bg-success">Memory Game</h1>
            {isGameOver && <GameOver />}
            {gameOn && !allCardsMatched === true && <GameStatus/>}
            {gameOn && <GameCard handelEmojiClick={clickView} emojiData={emojiData} selectedCards={selectedCards} matchedCards={matchedCards} />}
            {!gameOn && <Wrapper handleSubmit={triggerGameStatus}/>}
        </div>
    )
}