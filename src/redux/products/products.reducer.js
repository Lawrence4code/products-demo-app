import productsActionsTypes from './products.types';

const products = [
  {
    id: 1,
    name: 'Chrysler',
    description: 'Nullam varius.',
    quantity: 30,
    price: 93.8,
  },
  {
    id: 2,
    name: 'Toyota',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    quantity: 13,
    price: 9.66,
  },
  {
    id: 3,
    name: 'Oldsmobile',
    description: 'Pellentesque eget nunc.',
    quantity: 46,
    price: 25.65,
  },
  {
    id: 4,
    name: 'Toyota',
    description: 'Vestibulum rutrum rutrum neque.',
    quantity: 5,
    price: 1.52,
  },
  {
    id: 5,
    name: 'Jensen',
    description: 'Mauris sit amet eros.',
    quantity: 48,
    price: 34.66,
  },
  {
    id: 6,
    name: 'Honda',
    description: 'Nulla nisl.',
    quantity: 19,
    price: 62.8,
  },
  {
    id: 7,
    name: 'BMW',
    description: 'Pellentesque ultrices mattis odio.',
    quantity: 31,
    price: 7.79,
  },
  {
    id: 8,
    name: 'Acura',
    description: 'Suspendisse accumsan tortor quis turpis.',
    quantity: 35,
    price: 93.29,
  },
  {
    id: 9,
    name: 'Lexus',
    description: 'Morbi vel lectus in quam fringilla rhoncus.',
    quantity: 48,
    price: 32.94,
  },
  {
    id: 10,
    name: 'Subaru',
    description: 'Nulla tellus.',
    quantity: 44,
    price: 31.83,
  },
  {
    id: 11,
    name: 'Pontiac',
    description: 'Nulla facilisi.',
    quantity: 38,
    price: 28.48,
  },
  {
    id: 12,
    name: 'Mitsubishi',
    description: 'Morbi non quam nec dui luctus rutrum.',
    quantity: 48,
    price: 48.72,
  },
];

const defaultState = {
  items: [...products],
  filteredItems: [...products],
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
        products: action.payload.items,
      };
    case productsActionsTypes.SET_PRODUCTS_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case productsActionsTypes.SET_PRODUCTS_CURRENT_PAGE:
      return {
        ...state,
      };
    case productsActionsTypes.SET_PRODUCTS_FETCH_ERROR:
      return {
        ...state,
        isFetchError: action.payload,
      };
    case productsActionsTypes.ADD_PRODUCT:
      return {
        ...state,
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
