/* eslint-disable @typescript-eslint/no-unused-vars */

const apiEndpoint = "http://localhost:8000";

export const customerApi = {
  getBikeList: async () => {
    try {
      const response = await fetch(`${apiEndpoint}/bikeList`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching bike list:", error);
      return [];
    }
  },
  getBikeDetails: (id: string) => {},

  setAadharAndDrivingNumbers: (
    aadharNumber: string,
    drivingLicence: string
  ) => {},
  payNow: () => {},
  login: () => {},
  logout: () => {},
};
