import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
    super(props);
  }

renderComments(parsedComments) {
  const comments = parsedComments.map((comment) => {
      return(
        <div key={comment.id}>
          <li>
            <p>{comment.comment}</p>
            <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
          </li>
        </div>
      );
    })
  return(comments);
}

renderDish(dish) {
    return(
      <div className = "row">
          < div className="col-12 col-md-5 mt-1" >
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 mt-1" >
          <CardTitle>Comments</CardTitle>
          <ul className="list-unstyled">
            {this.renderComments(dish.comments)}
          </ul>
        </div>
      </div>
    );
  }

  render() {
    const seletedDish = this.props.seletedDish
    if (seletedDish != null){
      return(
        <div>
          {this.renderDish(seletedDish)}
        </div>);
    }
    else {
      return(
        <div></div>
      );
    }
  }
}
export default DishDetail;