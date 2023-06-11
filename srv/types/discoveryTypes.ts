export interface UserLocation {
  Lat: number;
  Long: number;
}

interface BasicFields {
  Category: string;
  "Chain Name": string;
}

interface Location {
  Address: string;
  Lat: number;
  Long: number;
  Name?: string;
  ShortAddress: string;
}

export interface Business {
  "Basic Fields": BasicFields;
  Locations: { [key: string]: Location };
}
export interface BusinessData {
  [key: string]: Business;
}

export interface SortedBusiness {
  name: string;
  latitude: number;
  longitude: number;
  distance: number;
}