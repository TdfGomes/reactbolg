import { REQUEST_CATEGORIES } from './actionTypes'
import { getCategories } from '../utils'

export const requestCategories = (categories) => ({
  type: REQUEST_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch => (
  getCategories().then(categories => dispatch(requestCategories(categories.categories)))
)