import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge,Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";

class ProductList extends Component {
  componentDidMount() {
    // uygulama açıldığında getPorducts ı çağırıyoruz.
    this.props.actions.getProducts();
  }

  render() {
    return (
      <div>
        <Badge color="warning">
          <h5>Product List</h5>
        </Badge>
        <Badge color="success">
          <h5>{this.props.currentCategory.name}</h5>
        </Badge>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Unit In Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product=>(
                 <tr>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
            </tr>
            ))}
         
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //Bu componentin prop larına state i bağla
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer, // artık bu componentin prop larında products var.
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
