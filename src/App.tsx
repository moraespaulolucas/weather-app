import { geoApi, weatherApi } from "./services/api"
import { City, Country, GeoRes, Item, Location } from "./model"
import AsyncSelect from "./components/AsyncSelect/AsyncSelect"
import { useState } from "react"

function App() {
  const [country, setCountry] = useState("")

  const onCountryChange = (countryId: string) => {
    setCountry(countryId)
  }

  const getCountries = (namePrefix: string) =>
    geoApi.get<GeoRes<Country>>("/countries", { params: { namePrefix } }).then(res => {
      return {
        options: res.data.data.map(country => {
          return {
            label: country.name,
            value: country.wikiDataId,
          } as Item<string>
        }),
      }
    })

  const getCities = (countryIds: string, namePrefix: string) =>
    geoApi.get<GeoRes<City>>("/cities", { params: { namePrefix, countryIds } }).then(res => {
      return {
        options: res.data.data.map(city => {
          return {
            label: city.city,
            value: {
              latitude: city.latitude,
              longitude: city.longitude,
            },
          } as Item<Location>
        }),
      }
    })

  const getWeather = (lat: string, lon: string) =>
    weatherApi.get("/weather", { params: { lat, lon } }).then(console.log).catch(console.error)

  return (
    <>
      <div className="container m-auto">
        <header className="p-2 flex gap-2">
          <AsyncSelect onValueChange={onCountryChange} loadOptions={getCountries} />
          <AsyncSelect useEffectDependencies={[country]} loadOptions={e => getCities(country, e)} />
        </header>
      </div>
      <h1>{}</h1>
    </>
  )
}

export default App
