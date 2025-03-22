import { decodeEntity } from 'html-entities'
export default function EmojiButton({content, index, style, handelClick}: any) {
    
    return(
        <button type="button" onClick={() => handelClick(content.name,index)} className={style}>
            {decodeEntity(content.htmlCode[0])}
        </button>
    )
}