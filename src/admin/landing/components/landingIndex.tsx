import LandingBackgroundImage from "./landingbackgroundimage";
import LandingConverContainter from "./landingcovercontainer";


const LandingIndexPage = () => {
    return (
        <>
            <header className="landingPageBackground">
                <LandingBackgroundImage />
                <LandingConverContainter />
            </header>
        </>
    )
}

export default LandingIndexPage;