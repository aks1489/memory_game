export default function EmojiButton({content, handleClick, selectedCard, matchedCard}: any) {
    const cardStyle = selectedCard ? "btn-warning" : matchedCard ? "btn-success border border-white" : "btn-light"
    const buttonContent = selectedCard || matchedCard ? content : "❓"
    return(
        <button 
            type="button"
            onClick={handleClick}
            className={`btn ${cardStyle} border-3 emo`}>
                {buttonContent}
        </button>
    )
}