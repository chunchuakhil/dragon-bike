import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IAuthState = {
  isAuth: boolean;
  uid: string;
  userName: string;
};
type InitialState = {
  value: IAuthState;
};
const initialState: InitialState = {
  value: {
    isAuth: false,
    uid: "",
    userName: "",
  },
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<boolean>) => {
      state.value.isAuth = action.payload;
    },
    logoutAction: () => {
      return initialState;
    },
  },
});

export const { loginAction, logoutAction } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
