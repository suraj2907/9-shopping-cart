import React , {useState , useEffect} from "react";
import Axios  from "axios";

import { faker } from '@faker-js/faker';
import {Container , Col , Row}  from "reactstrap"

const API_KEY = "ADZp29Pae3TmghL0MaQehXX4y8xAsX6VWiAIQoPEomg82PvJbneinmC2";
const URL = "https://api.pexels.com/v1/search?query=tshirts&per_page=8&page=1"
const LocalURL ="";

const BuyPage = ({addItem}) => {
const [product , setProduct] = useState([]);
//Function with Authorisation key inside Headers
const fetchfunc = async () => {
const {data} = await Axios.get(URL ,{
    headers : {
        Authorization :API_KEY
    }
});



//Function without any key
// const fetchfunc = async () => {
//     const {data} = await Axios.get(LocalURL);
// };

const {photos} = data;

const allProduct = photos.map(photo =>({
smallImage : photo.src.small,
tinyImage: photo.src.tiny,
id: faker.string.uuid(),
productName :  faker.internet.userName(),
productPrice : faker.commerce.price()

}));
console.log(allProduct);

setProduct(allProduct)
};

useEffect(()=>{
    fetchfunc();
},[]);

return(
    <Container fluid >
        <h1 className="text-center">Buy Page</h1>
        <Row>
        {product.map(product =>(
            <span key={product.id}>
            {product.productName}
            </span>
        ))}
        </Row>
    </Container>
)

};



export default BuyPage;