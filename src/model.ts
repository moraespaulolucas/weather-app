export interface Item<T> {
  value: T
  label: string
}

export interface GeoRes<T> {
  data: T[]
  [key: string]: unknown
}

export interface Country {
  code: string
  name: string
  wikiDataId: string
}

export interface City {
  city: string
  latitude: number
  longitude: number
}

export interface Location {
  latitude: number
  longitude: number
}
