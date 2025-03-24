export default function EmojiButton({content, handleClick, selectedCard, matchedCard}: any) {
    const cardStyle =  matchedCard ? "btn-success border border-white disabled animation block_pointer" : selectedCard ? "btn-warning animation" : "btn-light"
    const buttonContent = selectedCard || matchedCard ? content : "❓"
    return(
        <button 
            type="button"
            onClick={selectedCard ? null : handleClick}
            disabled={matchedCard}
            className={`btn ${cardStyle} border-3 emo`}>
                {buttonContent}
        </button>
    )
}