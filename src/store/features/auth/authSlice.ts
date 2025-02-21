import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type IAuthState = {
  isAuth: boolean;
  uid: string;
  userName: string | null;
  userImage: string | null;
};
type InitialState = {
  value: IAuthState;
};
const initialState: InitialState = {
  value: {
    isAuth: false,
    uid: "",
    userName: "",
    userImage: "",
  },
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<IAuthState>) => {
      state.value = action.payload;
    },
    logoutAction: () => {
      return initialState;
    },
  },
});

export const { loginAction, logoutAction } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
