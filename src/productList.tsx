import Product from './Product';

interface ProductType {
  id: number;
  title: string;
  category: string;
  price: number;
}

interface ProductListProps {
  products: ProductType[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <div>
      <div className={`grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3`}>
        {products.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            category={item.category}
            thumbnail={'https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=600'}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;