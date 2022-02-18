import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });
  //state deki product ı setproduct fonksiyonu ile set edebilirim
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  }, [props.product]); // son ifade sonsuz döngüye girmeyi engellemek için ve lifecycle ile alakalı
  //props.product ı izle Dom a yerleşince bu işlemi bitir demek
  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      history.push("/");
    });
  }
  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

export function getProductById(products, productId) {
  let product = products.find((product) => product.id == productId) || null;
  //product.id sayı productId string buna dikkat === olmaz
  return product;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
