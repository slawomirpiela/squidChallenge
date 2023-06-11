import { VALID_BUSINESS_TYPES } from "../utils/constants"

export function isValidLatitude(latitude: string): boolean | number {
  // Parse the latitude string to a numeric value
  const lat = parseFloat(latitude);

  // Check if the parsed value is a number
  if (isNaN(lat)) {
    return false;
  }

  // Check if the latitude is within the valid range (-90 to 90)
  if (lat < -90 || lat > 90) {
    return false;
  }

  return lat;
}

export function isValidLongitude(longitude: string): boolean | number {
  // Parse the longitude string to a numeric value
  const long = parseFloat(longitude);

  // Check if the parsed value is a number
  if (isNaN(long)) {
    return false;
  }

  // Check if the longitude is within the valid range (-180 to 180)
  if (long < -180 || long > 180) {
    return false;
  }

  return long;
}

export function isValidLimitNumber(limit: string): boolean | number {
    
    if (limit && Number.isInteger(Number(limit))) {
        // numberParam is a valid whole number
        const parsedNumber = parseInt(limit as string, 10);

        // Use parsedNumber in your logic
        return parsedNumber
      } else {
        // numberParam is not a valid whole number
        return false;
      }
    
  }

  export function isValidBusinessType(type: string): boolean {
    
    if (type && VALID_BUSINESS_TYPES.includes(type)) {
        // stringParam is a valid value
        // Use stringParam in your logic
        return true;
      } else {
        // stringParam is not a valid value
        return false;
      }
    
  }

