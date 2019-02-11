// export default function reducer(state, action) {
//   console.log("state in reducer: ", state);
//   switch (action.type) {
//     case "UPDATE_TEAM":
//       console.log("action payload: ", action.payload);
//       return action.payload;
//     default:
//       return state;
//   }
// }

export default function reducer(state, action) {
  console.log("statE: ", state);

  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: Math.random(),
        text: action.payload
      };
    case "TOGGLE_TODO":
      const toggledTodos = state.todos.map(todo =>
        todo.id === action.payload.id
          ? { ...action.payload, completed: !action.payload.completed }
          : todo
      );
      return {
        ...state,
        todos: toggledTodos
      };
    case "REMOVE_TODO":
      const filteredTodos = state.todos.filter(
        todo => todo.id !== action.payload.id
      );
      return {
        ...state,
        todos: filteredTodos
      };
    case "UPDATE_TEAM":
      console.log(action);
      return action.payload;
    default:
      return state;
  }
}
