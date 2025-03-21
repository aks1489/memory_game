import { GameCardProps} from '../Interface'
import { decodeEntity } from 'html-entities'
export default function GameCard({emojiData, handelEmojiClick}: GameCardProps) {

    const handleEmoji = emojiData.map((emo, index) => {
        return (
                <li 
                    key={index} 
                    className="emoji_holder col-auto p-1 d-flex justify-content-center align-items-center">
                        <button type="button" onClick={() => handelEmojiClick(emo.name,index)} className="btn btn-light border-3 emo">
                            {decodeEntity(emo.htmlCode[0])}
                        </button>
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