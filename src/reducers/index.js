const reducer = (state, action) => {
  console.log('Ejecuta reducer');
  console.log(`Action: ${action.type}`);
  switch (action.type) {
    case 'SET_FAVORITE':
      console.log([...state.mylist, action.payload]);
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case 'DELETE_FAVORITE':
      console.log(`Pelicula a eliminar: ${action.payload}`);
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      console.log(`Login request payload: ${action.payload}`);
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      console.log(`Logout request payload: ${action.payload}`);
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      console.log(`Register request payload: ${action.payload}`);
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      console.log(`Get Video Source request payload: ${action.payload}`);
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
        state.original.find((item) => item.id === Number(action.payload)) ||
        [],
      };
    default:
      console.log(`State: ${state.mylist}`);
      return state;
  }
};

export default reducer;
