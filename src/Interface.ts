import { BaseSyntheticEvent, MouseEventHandler } from "react";

export interface GameCardProps {
    handelemojiClick: MouseEventHandler
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