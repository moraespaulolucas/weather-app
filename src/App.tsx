import ApiService from "./services/api"
import { useEffect, useMemo, useState } from "react"
import CustomSelect from "./components/CustomSelect"
import { Item, Location } from "./model"

function App() {
  const [country, setCountry] = useState<Item<string> | null>(null)
  const [countryId, setCountryId] = useState<string>()
  const [city, setCity] = useState<Item<Location> | null>(null)

  const apiService = useMemo(() => new ApiService(), [])

  useEffect(() => {
    if (country) {
      setCountryId(country.value)
      setCity(null)
    }
  }, [country])

  useEffect(() => {
    if (city) {
      apiService.getWeather(city.value.latitude, city.value.longitude).then(console.log)
    }
  }, [city, apiService])

  return (
    <>
      <div className="container m-auto">
        <header className="p-2">
          <CustomSelect value={country} onChange={setCountry} loadOptions={apiService.getCountries} />
          <CustomSelect
            value={city}
            isDisabled={country === null}
            cacheUniqs={[country]}
            loadOptions={(search) => apiService.getCities(search, countryId)}
            onChange={setCity}
          />
        </header>
      </div>
    </>
  )
}

export default App
