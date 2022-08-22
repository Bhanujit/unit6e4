
import React , {useEffect} from "react";
import { getCountries} from "../Redux/actions";
import { useDispatch,useSelector } from "react-redux/es/exports";
import  styled  from 'styled-components'
import { Link } from "react-router-dom";


const Container = styled.div`
height: auto;
width: 80%;
display:  grid;
grid-template-columns:1fr 1fr 1fr;
margin: 70px auto;

`
const Cart = styled.div`
    height:  350px;
    width: 350px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    display: flex;
    flex-direction: column;
    margin: 20px;
    justify-content: center;
    align-items: center;
    padding: 10px;
`
const Image = styled.img`
    height: 200px;
    width: 200px;
    padding: 5px;
`
const AddToCart = styled.button`
    height: 40px;
    background-color: blue;
    font-size: larger;
    color: white;
    border: 1px solid black;
    border-radius: 5px;
    padding: 7px;
    margin:10px;
`



const ProductsPage = () => {
    const data= useSelector((store) => store.countryReducer.countries);
    console.log(data)
    // const filter = useSelector((store) => store.todo.filter);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCountries(`http://localhost:8080/products`));
    }, []);
  return (
    <Container>
    {data.map((e)=> {
        return (
            <Link to={`/Products/${e.id}`} style={{"textDecoration":"none"}} >
            <Cart >
            <Image src = {e.imageSrc}/>
            <h3>{e.title}</h3>
            <h3>Price: {e.price}$</h3>
            <AddToCart>Add to cart</AddToCart>
            </Cart>
            </Link>
        )
    })}
   </Container>
  );
};


  
export default ProductsPage