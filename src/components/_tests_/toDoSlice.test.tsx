import { ITask } from '../../models/models';
import tasksReducer, {
  addTodo,
  removeTodo,
  setTodoStatus,
  clearCompleted
} from '../../store/slices/tasksSlice';

describe('tasksSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = tasksReducer(undefined, { type: '' });

    expect(result).toEqual([]);
  })

  it('should add new task with "addTodo" action', () => {
    const expectedTask: ITask = { id: '12345', description: 'Redux toolkit', completed: false };
    const action = { type: addTodo.type, payload: expectedTask };

    const result = tasksReducer([], action);

    expect(result[0].description).toBe('Redux toolkit');
    expect(result[0].completed).toBe(false);
  })

  it('should toogle task completed with "setTodoStatus" action', () => {
    const task: ITask[] = [ { id: 'ertyu', description: 'Redux toolkit', completed: false } ];
    const expectedTask = { completed: true, id: task[0].id }
    const action = { type: setTodoStatus.type, payload: expectedTask };

    const result = tasksReducer(task, action);

    expect(result[0].completed).toBe(true);

  })

  it('should remove task by id with "removeTodo" action', () => {
    const task:ITask[] = [{ id: 'ertyu', description: 'Redux toolkit', completed: false }];
    const action = { type: removeTodo.type, payload: 'ertyu' };

    const result = tasksReducer(task, action);

    expect(result).toEqual([]);

  })

  it('should remove tasks completed with "clearCompleted" action', () => {
    const task: ITask[] = [{ id: 'ertyu', description: 'Redux toolkit', completed: false },
    { id: 'ertyg', description: 'Redux toolkit', completed: true },
    { id: 'erryg', description: 'Redux toolkit', completed: false }];
    const action = { type: clearCompleted.type, payload: false };

    let result = tasksReducer(task, action).filter(t => !t.completed);

    expect(result.length).toEqual(2);
  })
})

