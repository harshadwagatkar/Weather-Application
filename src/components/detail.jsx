import { useContext } from "react";
import "./detail.css";
import { CityContext } from "./Hooks/ContextProvider";

export default function Details() {
    const { weatherData, loading, error } = useContext(CityContext);

    if (loading) return <h1>Please wait...</h1>;
    if (error) return <h1>Sorry... {error}</h1>;
    if (!weatherData || !weatherData.current) return <h1>Sorry... no data found</h1>;

    return (
        <ul>
            <li>
                <i className="ri-temp-hot-line"></i>
                <div>
                    <span>Feels Like</span>
                    <span>{weatherData.current.feelslike_c}°</span>
                </div>
            </li>
            <li>
                <i className="ri-water-percent-fill"></i>
                <div>
                    <span>Humidity</span>
                    <span>{weatherData.current.humidity} %</span>
                </div>
            </li>
            <li>
                <i className="ri-windy-line"></i>
                <div>
                    <span>Wind</span>
                    <span>{weatherData.current.wind_mph} mph</span>
                </div>
            </li>
            <li>
                <i className="ri-mist-fill"></i>
                <div>
                    <span>Pressure</span>
                    <span>{weatherData.current.pressure_mb} mb</span>
                </div>
            </li>
        </ul>
    );
}














// import { useContext } from "react";
// import "./detail.css";
// import { CityContext, useFetch } from "./Hooks/ContextProvider";

// export default function Details() {
//     const {url} = useContext(CityContext)
//     const {weatherData, loading, error} = useFetch(url)

//     if (loading) return <h1>please wait ...</h1>;
//     if (error) return <h1>Sorry... {error}</h1>;
//     if (!weatherData || !weatherData.current) return <h1>Sorry... no data found</h1>;



//   return (
//     <ul>
//       <li>
//         <i className="ri-temp-hot-line"></i>
//         <div>
//           <span>Feels Like</span>
//           <span>{weatherData.current.feelslike_c}°</span>
//         </div>
//       </li>
//       <li>
//         <i className="ri-water-percent-fill"></i>
//         <div>
//           <span>Humidity</span>
//           <span>{weatherData.current.humidity} %</span>
//         </div>
//       </li>
//       <li>
//         <i className="ri-windy-line"></i>
//         <div>
//           <span>Wind</span>
//           <span>{weatherData.current.wind_mph} mph</span>
//         </div>
//       </li>
//       <li>
//         <i className="ri-mist-fill"></i>
//         <div>
//           <span>Pressure</span>
//           <span>{weatherData.current.pressure_mb} mb</span>
//         </div>
//       </li>
      
//     </ul>
//   );
// }
