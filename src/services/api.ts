import axios from 'axios';
import { Product } from 'types/product.types';

type Products = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type GetProductsResponse = {
	[x: string]: any;
  data: Products[];
};

async function getProducts() {
  try {
    const { data } = await axios.get<GetProductsResponse>(
      'http://localhost:3333/products',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

		const productsWithQuantity = data.map((product: Product) => ({
			...product,
			quantity: 0,
		}));

    return productsWithQuantity;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export default getProducts;
