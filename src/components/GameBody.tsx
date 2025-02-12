import './css/gamebody.css'
import GameCard from "./GameCard";

export default function GameBody() {

    function clickView() {
        console.log("Emoji Clicked")
    }
    
    return(
        <div className="game_body m-0 bg-info-subtle d-flex align-items-center p-1">
            <GameCard handelemojiClick={clickView}/>
        </div>
    )
}