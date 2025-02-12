import { GameCardProps } from '../Interface'
export default function GameCard(props: GameCardProps) {
    const emoji = ['😊', '📞', '❤️', '😒', '😎', '📧', '🎈', '🙌', '🧑‍🦼‍➡️', '👛']

    const handleEmoji = emoji.map((emo, index) => {
        return <li key={index} className="emoji_holder col-auto p-1 d-flex justify-content-center align-items-center">
                    <button type="button" onClick={props.handelemojiClick} className="btn btn-outline-light border-3 emo">{emo}</button>
                </li>
    })
    console.log(props.handelemojiClick)

    return(
        <div className="container bg-primary flex-column d-flex align-items-center">
            <h1 className="mb-3 text-white">Memory Game</h1>
            <ul className="container w-100 d-flex flex-row flex-wrap justify-content-around">
                <div className="row row-cols-2 row-cols-lg-5 justify-content-center">
                    {handleEmoji}
                </div>
            </ul>
        </div>
    )
}