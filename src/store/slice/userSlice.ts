import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserState = {
  profile: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProfile(state, action: PayloadAction<UserState['profile']>) {
      state.profile = action.payload;
    },
    clearUserProfile(state) {
      state.profile = null;
    },
  },
});

export const { setUserProfile, clearUserProfile } = userSlice.actions;
export default userSlice.reducer;
