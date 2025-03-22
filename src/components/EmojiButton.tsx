export default function EmojiButton({content, handleClick, style, selectedCard, matchedCard}: any) {
    const buttonContent = selectedCard || matchedCard ? content : "❓"
    return(
        <button 
            type="button"
            onClick={handleClick}
            className={style}>
                {buttonContent}
        </button>
    )
}