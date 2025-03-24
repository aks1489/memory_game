import { useEffect, useRef } from "react"

export default function GameOver() {
    const divref = useRef<null | HTMLDivElement>(null)

    useEffect(() => {
        if(divref.current) {
            divref.current.focus()
        }
    },[])
    return(
        <div className="container bg-success flex-column d-flex align-items-center p-2 rounded mb-2" ref={divref} tabIndex={-1}>
            <div className="row justify-content-center mt-5">
                <div className="col text-center">
                    <h1 className="text-white">You've matched all the memory cards!🎉</h1>
                </div>
            </div>
            <div className="row justify-content-center mt-3">
                <div className="col text-center">
                    <button className="btn btn-primary" onClick={() => window.location.reload()}>Play Again</button>
                </div>
            </div>
        </div>
    )
}