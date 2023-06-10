export interface Location {
  lat: number;
  long: number;
}
export interface Business {
  id: string;
  name: string;
  locations: {
    [key: string]: Location;
  };
}