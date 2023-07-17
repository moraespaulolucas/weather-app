import axios from "axios"
import { GeoRes, Country, Item, City, Location, Weather } from "../model"

const geoApi = axios.create({
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo",
  headers: {
    "X-RapidAPI-Key": "8cde7e2afamshef91292654cc69bp11f4bajsn27703d7369d4",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
  params: {
    limit: 10,
  },
})

const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: "b64450d57a1b534b37a68b6cf654126d",
    units: "metric",
  },
})

class ApiService {
  async getCountries(namePrefix?: string) {
    const response = namePrefix
      ? await geoApi.get<GeoRes<Country>>("/countries", { params: { namePrefix } })
      : await geoApi.get<GeoRes<Country>>("/countries")

    const options = response.data.data.map((country) => {
      return {
        label: country.name,
        value: country.wikiDataId,
      } as Item<string>
    })

    return {
      options,
    }
  }

  async getCities(namePrefix?: string, countryIds?: string) {
    const response = namePrefix
      ? await geoApi.get<GeoRes<City>>("/cities", {
          params: { namePrefix, countryIds, sort: "-population" },
        })
      : await geoApi.get<GeoRes<City>>("/cities", {
          params: { countryIds, sort: "-population" },
        })

    const options = response.data.data.map((city) => {
      return {
        label: city.name,
        value: {
          latitude: city.latitude,
          longitude: city.longitude,
        },
      } as Item<Location>
    })

    return {
      options,
    }
  }

  async getWeather(lat: number, lon: number) {
    const { data } = await weatherApi.get<Weather>("/weather", { params: { lat, lon } })
    return data
  }
}

export default ApiService
