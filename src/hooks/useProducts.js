import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getProducts } from '../services/products';

const useProducts = () => {
  const pocId = useSelector(state => state.poc);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const { products: prodList, error } = await getProducts(pocId);

      if (error) {
        setError(true);
        setIsLoading(false);
        return;
      }

      const normalized = prodList.map(normalizeProduct);

      setProducts(normalized);
      setIsLoading(false);
      return;
    };

    fetch();
  }, [pocId]);

  return [products, isLoading, error];
};

const normalizeProduct = (product = {}) => {
  const { id, title, images, productVariants } = product;
  const url = images[0]?.url;
  const price = productVariants[0]?.price;

  return { id, url, price, title };
};

export default useProducts;
