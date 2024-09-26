import React from 'react';
import { ShopContext } from '../Context/ShopContextProvider';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrums/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/Description Box/DescriptionBox';
import RelatedProduct from '../Components/RelatedProducts/RelatedProduct';

const Product = () => {
  const {all_product} = React.useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div className='product'>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product;