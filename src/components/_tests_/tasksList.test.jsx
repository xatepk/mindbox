import { render } from '@testing-library/react';
import * as reduxHooks from 'react-redux';

import TasksList from '../TasksList';

jest.mock('react-redux');

const tasks = [
  { id: '123', description: 'Redux toolkit', completed: false },
  { id: '124', description: 'Jest', completed: false },
];

describe('TasksList', () => {
  it('should create TasksList witn empty tasks', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([]);

    const view = render(<TasksList />);

    expect(view).toMatchSnapshot();
  });

  it('should create TasksList witn tasks', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(tasks);

    const view = render(<TasksList />);

    expect(view).toMatchSnapshot();
  });
});
