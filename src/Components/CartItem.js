import React from "react";

import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const CardItem = ({ product, addItem }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg top height="250" width="100%" src={product.smallImage} />
      <CardBody>
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondary">
          Price : Rs {product.productPrice}
        </CardText>
        <Button color="success" onClick={() => addItem(product)}>
          Buy now
        </Button>
      </CardBody>
    </Card>
  );
};

export default CardItem;