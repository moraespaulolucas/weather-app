export interface Item<T> {
  value: T
  label: string
}

export interface GeoRes<T> {
  data: T[]
  [key: string]: unknown
}

export interface Country {
  wikiDataId: string
  name: string
}

export interface City {
  wikiDataId: string
  name: string
  latitude: number
  longitude: number
}

export interface Location {
  latitude: number
  longitude: number
}

export interface Weather {
  main: {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }

  clouds: {
    all: number
  }

  weather: {
    icon: string
    main: string
  }[]
}
