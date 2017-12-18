// import axios from 'axios';

// export const changeSearchText = (searchText) => {
//   return {
//     type: 'CHANGE_SEARCH_TEXT',
//     searchText
//   };
// }

// export const addTodo = (text) => {
//   return {
//     type: 'ADD_TODO',
//     text
//   };
// };

// export const removeTodo = (id) => {
//   return {
//     type: 'REMOVE_TODO',
//     id
//   }
// };


// export const startLocationFetch = () => {
//   return {
//     type: 'START_LOCATION_FETCH'
//   };
// }

// export const completeLocationFetch = (url) => {
//   return {
//     type: 'COMPLETE_LOCATION_FETCH',
//     url
//   };
// }

// export const fetchLocation = () => {
//   return (dispatch, getState) => {
//     dispatch(startLocationFetch());

//     axios.get('http://ipinfo.io').then((response) => {
//       const loc = response.data.loc;
//       const baseUrl = `http://maps.google.com?q=${loc}`;

//       dispatch(completeLocationFetch(baseUrl));
//     })
//   };
// }