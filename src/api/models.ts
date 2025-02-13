interface IUser {
  _id: string;
  name: string;
  mobileNumber: string;
  currentBooking?: string;
  bookingHistory: IBooking[];
}

interface IBikeDetails {
  _id: string;
  name: string;
  plateNumber: string;
  bookingStatus: boolean;
  currentUserId?: string;
  bookingHistory: IBooking[];
}

interface IBooking {
  userId: string;
  bikeId: string;
  startTime: Date;
  endTime?: Date;
}
