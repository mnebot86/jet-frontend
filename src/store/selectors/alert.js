import { createSelector } from '@reduxjs/toolkit';

export const alert = (state) => state.alert;

export const getHasError = createSelector(alert, (alert) => alert.hasError);
