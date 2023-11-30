import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type ISettings from './interfaces/ISettings';

export const initialState: ISettings = {
  density: null,
  inboxType: null,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<Partial<ISettings>>) => ({ ...state, ...action.payload }),
  },
});

export const { setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
