import { GameWrapperButton } from "../Interface"

export default function WrapperButton(props: GameWrapperButton) {
    console.log(props)
    return(
        <button type="button" onClick={props.handleClick} className="btn btn-secondary">
            {props.children}
        </button>
    )
}