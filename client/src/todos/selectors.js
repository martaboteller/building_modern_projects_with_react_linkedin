import { createSelector } from 'reselect';

//First two selectors
export const getTodos = (state) => state.todos.data;
export const getTodosLoading = (state) => state.todos.isLodading;

//Will use getTodos Selector
//We can pass as many selectors as we want
export const getIncompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
);

export const getCompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);
