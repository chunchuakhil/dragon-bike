export interface IUser {
  id: string;
  name: string;
  mobileNumber: string;
  currentBooking?: boolean;
  bookingHistory: IBooking[];
}

export interface IBikeDetails {
  id: string;
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
