import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tasksReducer from '../store/slices/tasksSlice';
import visibilityFilter from '../store/slices/filterSlice';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  visibilityFilter,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
