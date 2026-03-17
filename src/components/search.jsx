import { useContext, useState } from "react";
import "./search.css";
import { CityContext } from "./Hooks/ContextProvider";

export default function Search() {
    const [city, setCity] = useState("");
    const { setUrl } = useContext(CityContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!city.trim()) return;
        setUrl(`https://api.weatherapi.com/v1/current.json?key=c29187a8e0d04983af2181610251507&q=${city}&aqi=yes`);
        setCity("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search your city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
        </form>
    );
}

