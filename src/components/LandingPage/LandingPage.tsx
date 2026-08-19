import "./LandingPage.css";

function LandingPage() {
    return (
        <div className="landing-page">

            <div className="split">
                <div className="left">
                    <img src={"src/assets/portrait.png"} alt="" className="portrait-image" />
                </div>
                <div className="right">
                    <h1 className="h1">Jonas Berger</h1>
                    <p>
                        Hi, im jonas and i have a really <del>dumb</del> <ins>genious</ins> website!!
                    </p>
                </div>
            </div>


        </div>
    );
}

export default LandingPage;
