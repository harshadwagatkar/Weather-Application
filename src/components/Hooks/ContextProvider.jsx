import { createContext, useEffect, useState } from "react";

export const CityContext = createContext("");

export function CityProvider({ children }) {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const [url, setUrl] = useState(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Mumbai&aqi=yes`,
  );

  const { weatherData, loading, error } = useFetch(url);

  return (
    <CityContext.Provider value={{ url, setUrl, weatherData, loading, error }}>
      {children}
    </CityContext.Provider>
  );
}

export function useFetch(url) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error.message);
        setWeatherData(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => controller.abort();
  }, [url]);

  return { weatherData, loading, error };
}
