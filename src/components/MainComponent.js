import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dishes: DISHES,
      seletedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({
      seletedDish: dishId
    });
  }

  render() {
    return (
      <div>
        <Navbar dark color = "primary">
          <div className="container">
            <NavbarBrand herf="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)} />
        <Dishdetail
          dish={this.state.dishes.filter((dish) => dish.id === this.state.seletedDish)[0]} />
      </div>
    );
  }
}

export default Main;