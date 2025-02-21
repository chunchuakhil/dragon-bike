/* eslint-disable @typescript-eslint/no-unused-vars */

import { firestore_db } from "@/firebase/firebaseConfig";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { IBikeDetails } from "./models";

const apiEndpoint = "http://localhost:8000";

export const customerApi = {
  getBikeList: async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore_db, "bikeList"));

      const bikes = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Get the document ID
        ...doc.data(), // Get the document fields
      }));

      console.log("All Bikes:", bikes);
      return bikes as IBikeDetails[];
    } catch (error) {
      console.error("Error fetching documents:", error);
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

  addDataToCollection: async () => {
    try {
      const customId = "102"; // Define custom ID

      const docRef = await setDoc(doc(firestore_db, "bikeList", customId), {
        id: customId,
        bookingStatus: false,
        name: "Honda Shine",
        plateNumber: "MH 456 456",
        image:
          "https://img.freepik.com/free-vector/man-woman-riding-moped-mountains_74855-10868.jpg?t=st=1739283687~exp=1739287287~hmac=89604eea8ad0daed0b4c5f9cbf7a54effc3d4123e153f211a482d168d8bdb8fb&w=1800",
        bookingHistory: [],
      } as IBikeDetails);

      console.log("Document written with ID: ", docRef);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  },
};
