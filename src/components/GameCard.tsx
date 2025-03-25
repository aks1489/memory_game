import { GameCardProps} from '../Interface'
import EmojiButton from './EmojiButton'
export default function GameCard({emojiData, handelEmojiClick, selectedCards, matchedCards}: GameCardProps) {

    const handleEmoji = emojiData.map((emo, index) => {
        const selectedCardEntry = selectedCards.find(emoji => emoji.index === index )
        const matchedCardEntry = matchedCards.find(emoji => emoji.index === index )

        return (
                <li 
                    key={index}
                    className="emoji_holder col-auto p-1 d-flex justify-content-center align-items-center">
                        <EmojiButton 
                            content={emo} 
                            index={index}
                            selectedCard={selectedCardEntry} 
                            matchedCard={matchedCardEntry} 
                            handleClick={() => handelEmojiClick(emo.name, index)}
                        />
                </li>
                )
    })

    return(
        <div className="container bg-primary flex-column d-flex align-items-center p-2 rounded">
            <ul className="container w-100 d-flex flex-row flex-wrap justify-content-around m-0">
                <div className="row row-cols-2 row-cols-lg-5 justify-content-center">
                    {handleEmoji}
                </div>
            </ul>
        </div>
    )
} 