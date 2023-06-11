import { Business, BusinessData } from "../types/discoveryTypes";
import fs from "fs";

//if this data becomes large we need to move to database to ensure no memory performance degradation
const businessesDataPath = "srv/data/businesses.json";

export const retrieveBusinesses = (): Business[] => {
  const fileContents = fs.readFileSync(businessesDataPath, "utf-8");
  const businessData: BusinessData = JSON.parse(fileContents);

  const businesses: Business[] = [];

  for (const key in businessData) {
    if (businessData.hasOwnProperty(key)) {
      const business = businessData[key];
      businesses.push(business);
    }
  }

  return businesses;
};
