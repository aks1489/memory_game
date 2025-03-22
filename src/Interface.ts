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
    handelEmojiClick: (name: string, index: number) => void,
    emojiData: EmoData[],
    selectedCards: ISelectedCards,
    matchedCards: ISelectedCards
}
export interface GameWrapperButton {
    children: string,
    handleClick: MouseEventHandler
}
export interface GameWrapper {
    handleSubmit: MouseEventHandler
}

export interface ISelectedCard {
    name: string;
    index: number;
}

export type ISelectedCards = ISelectedCard[];

export type gameOnOff = boolean

export type Ie = BaseSyntheticEvent