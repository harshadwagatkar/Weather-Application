import Details from "./detail";
import Logo from "./Logo";
import Main from "./main";
import Search from "./search";
import "./weather.css"

export default function Weather() {

    return(
        <div className="container">
            <Search />
            <Main />
            <Details />
            <Logo />
        </div>
    )
}