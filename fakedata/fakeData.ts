export interface IBikeDetails {
  _id: string;
  name: string;
  image?: string;
  isBooked: boolean;
}

export const fakeBikeData: IBikeDetails[] = [
  {
    _id: "1",
    name: "Honda activa",
    isBooked: false,
    image:
      "https://img.freepik.com/free-vector/man-woman-riding-moped-mountains_74855-10868.jpg?t=st=1739283687~exp=1739287287~hmac=89604eea8ad0daed0b4c5f9cbf7a54effc3d4123e153f211a482d168d8bdb8fb&w=1800",
  },
  {
    _id: "2",
    name: "Honda Shine",
    isBooked: false,
    image:
      "https://img.freepik.com/free-vector/man-woman-riding-moped-mountains_74855-10868.jpg?t=st=1739283687~exp=1739287287~hmac=89604eea8ad0daed0b4c5f9cbf7a54effc3d4123e153f211a482d168d8bdb8fb&w=1800",
  },
];
