import axios from "axios"

export const geoApi = axios.create({
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo",
  headers: {
    "X-RapidAPI-Key": "8cde7e2afamshef91292654cc69bp11f4bajsn27703d7369d4",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
  params: {
    limit: 10
  }
})

export const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: "b64450d57a1b534b37a68b6cf654126d",
  },
})
