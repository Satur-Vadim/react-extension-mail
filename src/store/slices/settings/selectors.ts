import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../../types/TStore';
import type ISettings from './interfaces/ISettings';

const selectSettings = (state: RootState): ISettings => state.settings;
export const selectDensity = createSelector(selectSettings, (jokes) => jokes.density);
export const selectInboxType = createSelector(selectSettings, (jokes) => jokes.inboxType);
