import { fireEvent, render, screen } from "@testing-library/react";
import * as reduxHooks from 'react-redux';
import { ITask } from "../../models/models";
import * as actions from '../../store/slices/tasksSlice';

import TaskItem from '../TaskItem';

jest.mock('react-redux');

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('TaskItem', () => {
  it('should create Task', () => {
    mockedDispatch.mockResolvedValue(jest.fn());

    const view = render(
      <TaskItem id='123' description="Redux Toolkit" completed={false} />
    );

    expect(view).toMatchSnapshot();
  });

  it('should dispatch actions', () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);

    const mockedToogleCompleted = jest.spyOn(actions, 'setTodoStatus');
    const mockedRemoveTask = jest.spyOn(actions, 'removeTodo');

    render(
      <TaskItem id='123' description="Redux Toolkit" completed={false} />
    );

    fireEvent.click(screen.getByRole('checkbox'));
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedToogleCompleted).toHaveBeenCalledWith({"completed": true, "id": "123"});

    fireEvent.click(screen.getByRole("button"));
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedRemoveTask).toHaveBeenCalledWith('123');

  });

})
