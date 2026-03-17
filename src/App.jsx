import Weather from "./components/weather";
import "./App.css"
import { CityProvider } from "./components/Hooks/ContextProvider";

export default function App() {

  return(
    <>
    <CityProvider>
      <Weather />
    </CityProvider>
    </>
  )
}