import { decodeEntity } from 'html-entities'

export default function EmojiButton({content, handleClick, selectedCard, matchedCard, index}: any) {
    const cardStyle =  matchedCard ? "btn-success border border-white disabled animation block_pointer" : selectedCard ? "btn-warning animation" : "btn-light"
    const buttonContent = selectedCard || matchedCard ? decodeEntity(content.htmlCode[0]) : "❓"

    const btnArea = matchedCard ? `${decodeEntity(content.name)} Matched.` : selectedCard ? `${decodeEntity(content.name)} Selected - not matched yet.` : "Card Upside down."
    return(
        <button 
            type="button"
            onClick={selectedCard ? null : handleClick}
            disabled={matchedCard}
            className={`btn ${cardStyle} border-3 emo`}
            arial-label={`Position ${index + 1}: ${btnArea}`}
            aria-live='polite'>
                {buttonContent}
        </button>
    )
}