import tasksReducer, {
  addTodo,
  removeTodo,
  setTodoStatus,
  clearCompleted
} from '../../store/slices/tasksSlice';

describe('tasksSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = tasksReducer(undefined, {type: ''});

    expect(result).toEqual([]);
  })

  it('should add new task with "addTodo" action', () => {
    const action = {type: addTodo.type, payload: 'Redux toolkit'};

    const result = tasksReducer([], action);

    expect(result[0].description).toBe('Redux toolkit');
    expect(result[0].completed).toBe(false);

  })

  it('should toogle task completed with "setTodoStatus" action', () => {
    const task = [{id: 'ertyu', description: 'Redux toolkit', completed: false}];
    const action = {type: setTodoStatus.type, payload: 'ertyu'};

    const result = tasksReducer(task, action);

    expect(result[0].completed).toBe(true);

  })

  it('should remove task by id with "removeTodo" action', () => {
    const task = [{id: 'ertyu', description: 'Redux toolkit', completed: false}];
    const action = {type: removeTodo.type, payload: 'ertyu'};

    const result = tasksReducer(task, action);

    expect(result).toEqual([]);

  })

  it('should remove tasks completed with "clearCompleted" action', () => {
    const task = [{id: 'ertyu', description: 'Redux toolkit', completed: false},
                  {id: 'ertyu', description: 'Redux toolkit', completed: true}];
    const action = {type: clearCompleted.type, payload: true};

    const result = tasksReducer(task, action);

    expect(result.filter(t => t.completed)).toEqual(-1);
  })
})

