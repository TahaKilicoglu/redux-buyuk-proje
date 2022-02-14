import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";

class CategoryList extends Component {
  componentDidMount(){  // bunu yazmadığımda kategorinin 8 tane olduğunu göremedim
    this.props.actions.getCategories()// buna neden ihtiyaç var iyi anla.
  }
  render() {
    return (
      <div>
        <h3>Category List  </h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem key={category.id}>{category.name}</ListGroupItem>
          ))}
        </ListGroup>
        <h5>Seçili Kategori : {this.props.currentCategory.name}</h5>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //Bu componentin prop larına state i bağla
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
