import { useContext } from "react";
import "./main.css";
import { CityContext } from "./Hooks/ContextProvider";

export default function Main() {
    const { weatherData, loading, error } = useContext(CityContext);

    if (loading) return <h1>Pending</h1>;
    if (error) return <h1>Sorry... {error}</h1>;
    if (!weatherData) return <h1>Sorry ...</h1>;

    return (
        <div className="main">
            <h2>{weatherData.location.name}</h2>
            <p>{weatherData.location.localtime}</p>
            <div className="sky">{weatherData.current.condition.text}</div>
            <div className="image">
                <img src={weatherData.current.condition.icon} alt="" />
            </div>
            <h3>{weatherData.current.temp_c}°</h3>
            <span>{weatherData.location.region}</span>
        </div>
    );
}












// import { useContext } from "react"
// import "./main.css"
// import { CityContext, useFetch } from "./Hooks/ContextProvider"

// export default function Main() {
//     const {url} = useContext(CityContext)
//     const {weatherData, loading, error} = useFetch(url)

//     if(loading) return <h1>Pending</h1>
//     if(error) return <h1>Error</h1>
//     if(!weatherData) return <h1>Sorry ...</h1>


//     return (
//         <div className="main">
//             <h2>{weatherData.location.name}</h2>
//             <p>{weatherData.location.localtime}</p>
//             <div className="sky">{weatherData.current.condition.text}</div>
//             <div className={"image"}>
//                 <img src={weatherData.current.condition.icon} alt="" />
//             </div>
//             <h3>{weatherData.current.temp_c}°</h3>
//             <span>{weatherData.location.region}</span>
//         </div>
//     )
// }