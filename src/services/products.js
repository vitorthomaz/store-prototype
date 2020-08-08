import { zeGraph } from '../services';

import {
  PRODUCT_REQUEST_ERROR,
  PRODUCT_VALIDATION_ERROR
} from '../constants/services';

const query = {
  getProducts: `
    query getProducts($id: ID!, $categoryId: Int, $search: String){
      poc(id: $id) {
        id
        products(categoryId: $categoryId, search: $search) {
          id
          title
          images {
            url
          }
          productVariants {
            price
          }
        }
      }
    }
  `
};

export const getProducts = async (pocId, categoryId = null, search = '') => {
  if (
    typeof pocId !== 'string' ||
    (categoryId !== null && typeof categoryId !== 'number') ||
    typeof search !== 'string'
  ) {
    console.log('Method getProducts was called with invalid params.');
    return PRODUCT_VALIDATION_ERROR;
  }

  const data = {
    query: query.getProducts,
    variables: { id: pocId, categoryId, search }
  };

  try {
    const result = await zeGraph.post('graphql', data);
    const products = result.data.data.poc;

    return products;
  } catch (err) {
    console.log({ err });

    return PRODUCT_REQUEST_ERROR;
  }
};
