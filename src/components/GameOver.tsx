export default function GameOver() {
    return(
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-12 col-md-6 text-center">
                    <h1 className="text-danger">You've matched all the memory cards!</h1>
                    <p className="text-muted">Better luck next time!</p>
                </div>
            </div>
            <div className="row justify-content-center mt-3">
                <div className="col-12 col-md-6 text-center">
                    <button className="btn btn-primary" onClick={() => window.location.reload()}>Play Again</button>
                </div>
            </div>
        </div>
    )
}