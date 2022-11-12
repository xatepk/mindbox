import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../../models/models';
import { v4 as uuidv4 } from 'uuid';

const initialState = [] as ITask[];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<ITask>) => {
        state.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
          id: uuidv4(),
          description,
          completed: false,
        } as ITask,
      }),
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    setTodoStatus(state, action: PayloadAction<{ completed: boolean; id: string }>) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    clearCompleted(state, action: PayloadAction<boolean>) {
      const newToDos = state.filter((todo) => todo.completed === action.payload);
      state.splice(0, state.length, ...newToDos);
    },
  },
});

export const { addTodo, removeTodo, setTodoStatus, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;
