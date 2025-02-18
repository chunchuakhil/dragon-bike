import { IBikeDetails, IBooking, IUser } from "./../src/api/models";
interface Idb {
  userList: IUser[];
  bikeList: IBikeDetails[];
  bookingDetails: IBooking[];
}

export const db: Idb = {
  userList: [
    {
      _id: "1",
      name: "Kumar",
      mobileNumber: "1234567890",
      bookingHistory: [],
      currentBooking: false,
    },
  ],
  bikeList: [
    {
      _id: "101",
      name: "Honda Activa",
      plateNumber: "MH 123",
      bookingHistory: [],
      currentUserId: null,
      bookingStatus: false,
    },
  ],
  bookingDetails: [],
};
//json-server --watch db.json --port 8000
