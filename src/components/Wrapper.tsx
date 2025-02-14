import { GameWrapper } from "../Interface";
import WrapperButton from "./WrapperButton";

export default function Wrapper(props: GameWrapper) {
    return(
        <form action="#" className="wrapper d-flex justify-content-center align-items-center">
            
            <WrapperButton handleClick={props.handleSubmit}>
                Start Game
            </WrapperButton>
        </form>
    )
}