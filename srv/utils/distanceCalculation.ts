import { Business, SortedBusiness, UserLocation } from "../types/discoveryTypes";

//helper
export function sortByProximityToLocation(
    businesses: Business[],
    userLocation: UserLocation
): SortedBusiness[] {
    const sortedBusinesses: SortedBusiness[] = [];

    const userLat: number = userLocation.Lat
    const userLong: number = userLocation.Long
    // Calculate the distance between two points using the Haversine formula
    function calculateDistance(lat1: number, long1: number, lat2: number, long2: number): number {
        const earthRadius = 6371; // Earth's radius in kilometers
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLong = (long2 - long1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLong / 2) *
            Math.sin(dLong / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = earthRadius * c;

        return distance;
    }

    businesses.forEach((business) => {
        Object.entries(business.Locations).forEach(([locationId, location]) => {
            const distance = calculateDistance(userLat, userLong, location.Lat, location.Long);
            sortedBusinesses.push({
                name: business["Basic Fields"]["Chain Name"],
                locationId,
                distance,
            });
        });
    });

    sortedBusinesses.sort((a, b) => a.distance - b.distance);

    return sortedBusinesses;
}