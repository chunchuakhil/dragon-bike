export interface IUser {
  _id: string;
  name: string;
  mobileNumber: string;
  currentBooking?: boolean;
  bookingHistory: IBooking[];
}

export interface IBikeDetails {
  _id: string;
  name: string;
  image?: string;
  plateNumber: string;
  bookingStatus: boolean;
  currentUserId?: string | null;
  bookingHistory: IBooking[];
}

export interface IBooking {
  userId: string;
  bikeId: string;
  startTime: Date;
  endTime?: Date;
}
