import { UserLocation, Business, BusinessData, SortedBusiness } from "../types/discoveryTypes";
import { Request, Response } from "express";
import { retrieveBusinesses } from "../utils/dataUtils";
import { sortByProximityToLocation } from "../utils/distanceCalculation";

export const sortBusinessesByProximity = (req: Request, res: Response) => {
    const myLocation: UserLocation = {
        Lat: 53.341234,
        Long: -6.258765,
    };
    const retrievedBusinesses = retrieveBusinesses();
    const closestBusinesses = sortByProximityToLocation(retrievedBusinesses, myLocation);
    res.status(200).json({
        success: true,
        location: "non",
        businesses: closestBusinesses,
    });
};

export const sortAndLimitBusinessesByProximity = (
    req: Request<any, any, any>,
    res: Response
) => { };

export const sortAndLimitBusinessesByProximityFilteredByCategory = () => { };

