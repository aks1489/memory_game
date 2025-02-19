import { BaseSyntheticEvent, MouseEventHandler } from "react";

export interface EmoData {
    category: string,
    group: string,
    htmlCode: string[],
    name: string,
    unicode: string[]
}

export type IRandomNumber = number[]
export interface GameCardProps {
    handelemojiClick: MouseEventHandler,
    emojiData: EmoData[],
}

export interface GameWrapperButton {
    children: string,
    handleClick: MouseEventHandler
}
export interface GameWrapper {
    handleSubmit: MouseEventHandler
}

export type gameOnOff = boolean

export type Ie = BaseSyntheticEvent