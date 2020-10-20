import productsActionsTypes from './products.types';

const defaultState = {
  items: [],
  filteredItems: [],
};

const sortItem = (items, sortPayload) => {
  if (sortPayload.sortOrder === 'dsc') {
    return items.sort((a, b) => {
      if (b[sortPayload.sortBy] > a[sortPayload.sortBy]) return 1;
      if (a[sortPayload.sortBy] > b[sortPayload.sortBy]) return -1;
      return 0;
    });
  } else {
    return items.sort((a, b) => {
      if (a[sortPayload.sortBy] > b[sortPayload.sortBy]) return 1;
      if (b[sortPayload.sortBy] > a[sortPayload.sortBy]) return -1;
      return 0;
    });
  }
};

export default function productsReducer(state = defaultState, action) {
  switch (action.type) {
    case productsActionsTypes.SET_PRODUCTS:
      return {
        ...state,
        items: [...action.payload],
        filteredItems: [...action.payload],
      };
    case productsActionsTypes.ADD_PRODUCT:
      localStorage.setItem(
        'items',
        JSON.stringify([...state.items, action.payload])
      );
      return {
        items: [...state.items, action.payload],
        filteredItems: [...state.items, action.payload],
      };
    case productsActionsTypes.SEARCH_PRODUCT:
      return {
        ...state,
        filteredItems: state.items.filter((items) =>
          items.name.toLowerCase().includes(action.payload)
        ),
      };
    case productsActionsTypes.SORT_FILTERED_PRODUCTS:
      const sorteditems = sortItem([...state.filteredItems], action.payload);
      return {
        ...state,
        filteredItems: sorteditems,
      };
    default:
      return state;
  }
}
