import {
  fetchCategoriesFailed,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from '../src/store/categories/category.action.ts';
import { CATEGORIES_ACTION_TYPES } from '../src/store/categories/category.types.ts';

import categoriesReducer, {
  CategoriesState,
} from '../src/store/categories/category.reducer.ts';
import {
  selectCategories,
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../src/store/categories/category.selector.ts';

describe('Category Actions', () => {
  test('fetchCategoriesStart should create the correct action', () => {
    const expectedAction = {
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    };

    expect(fetchCategoriesStart()).toEqual(expectedAction);
  });

  test('fetchCategoriesSuccess should create the correct action with payload', () => {
    const categoriesArray = [
      { id: 1, name: 'Category 1', price: 10 },
      { id: 2, name: 'Category 2', price: 20 },
    ];

    const expectedAction = {
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      payload: categoriesArray,
    };

    expect(fetchCategoriesSuccess(categoriesArray)).toEqual(expectedAction);
  });

  test('fetchCategoriesFailed should create the correct action with payload', () => {
    const error = new Error('Fetch failed');

    const expectedAction = {
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
      payload: error,
    };

    expect(fetchCategoriesFailed(error)).toEqual(expectedAction);
  });
});

describe('Category Reducer', () => {
  const initialState = {
    categories: [],
    isLoading: false,
    error: null,
  };

  test('should return the initial state', () => {
    expect(categoriesReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle FETCH_CATEGORIES_START', () => {
    const action = {
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    };

    const expectedState = {
      ...initialState,
      isLoading: true,
    };

    expect(categoriesReducer(initialState, action)).toEqual(expectedState);
  });

  test('should handle FETCH_CATEGORIES_SUCCESS', () => {
    const categoriesArray = [
      { id: 1, name: 'Category 1', price: 10 },
      { id: 2, name: 'Category 2', price: 20 },
    ];

    const action = {
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      payload: categoriesArray,
    };

    const expectedState = {
      ...initialState,
      categories: categoriesArray,
      isLoading: false,
    };

    expect(categoriesReducer(initialState, action)).toEqual(expectedState);
  });

  test('should handle FETCH_CATEGORIES_FAILED', () => {
    const error = new Error('Fetch failed');

    const action = {
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
      payload: error,
    };

    const expectedState = {
      ...initialState,
      isLoading: false,
      error: error,
    };

    expect(categoriesReducer(initialState, action)).toEqual(expectedState);
  });
});

describe('Category Selectors', () => {
  const categoriesArray = [
    {
      title: 'Category 1',
      imageUrl: 'image-url-1',
      items: [{ id: 1, name: 'Item 1', price: 10 }],
    },
    {
      title: 'Category 2',
      imageUrl: 'image-url-2',
      items: [{ id: 2, name: 'Item 2', price: 20 }],
    },
  ];

  const state = {
    categories: {
      categories: categoriesArray,
      isLoading: false,
      error: null,
    },
  };

  test('selectCategories should return the categories array', () => {
    expect(selectCategories(state)).toEqual(categoriesArray);
  });

  test('selectCategoriesMap should return the categories map', () => {
    const expectedCategoryMap = {
      'category 1': [{ id: 1, name: 'Item 1', price: 10 }],
      'category 2': [{ id: 2, name: 'Item 2', price: 20 }],
    };
    expect(selectCategoriesMap(state)).toEqual(expectedCategoryMap);
  });

  test('selectCategoriesIsLoading should return the isLoading value', () => {
    expect(selectCategoriesIsLoading(state)).toBe(false);
  });
});
