import { UserLocation, Business, BusinessData, SortedBusiness, DiscoveryRequest } from "../types/discoveryTypes";
import { Request, Response } from "express";
import { retrieveBusinesses } from "../utils/dataUtils";
import { sortByProximityToLocation } from "../utils/distanceCalculation";
import { isValidBusinessType, isValidLatitude, isValidLimitNumber, isValidLongitude } from "../utils/verifyValues";

export const sortBusinessesByProximity = (req: Request, res: Response) => {
  const { lat, long, limit, type } = req.query;

  // Type validation
  if (typeof lat !== "string" || typeof long !== "string") {
    res.status(400).send("Invalid basic query parameters - Please check you're providing the right coordinates");
    return;
  }

  //const isValidLimitNumber = isValidLimitNumber(limit)

  let targetLimit;
  if(limit && typeof limit === "string"){
    targetLimit = isValidLimitNumber(limit)
  }

  let targetType: string | boolean = false;
  if(type && typeof type === "string"){
    targetType = isValidBusinessType(type)
  }

   //const isValidLimit2 = isValidLimitNumber(targetLimit)
  //all query params are strings by default but we need numbers for the location
  const latNumber = isValidLatitude(lat);
  const longNumber = isValidLongitude(long);

  // Additional validation if needed
  if (typeof latNumber !== "number" || typeof longNumber !== "number") {
    res.status(400).send("Invalid latitude or longitude");
    return;
  }

  const myLocation: UserLocation = {
    Lat: latNumber,
    Long: longNumber,
  };
  let retrievedBusinesses = retrieveBusinesses();

  if(targetType){
    retrievedBusinesses = retrievedBusinesses.filter((obj) => obj["Basic Fields"].Category === type);
  }

  let closestBusinesses = sortByProximityToLocation(retrievedBusinesses, myLocation);

  if(targetLimit && typeof targetLimit === "number"){
    closestBusinesses = closestBusinesses.slice(0, targetLimit);
  }


  res.status(200).json({
    success: true,
    closestBusinesses,
  });
};

