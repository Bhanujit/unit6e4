import React , {useEffect,useState} from "react";
// import {Link} from 'react-router-dom'
import  styled  from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux/es/hooks/useSelector";


export const Product = ()=>{
    const data= useSelector((store) => store.countryReducer.countries);
    console.log(data)
    const {id} = useParams()
    let product = {}
    for(let i = 0;i<data.length;i++){
        console.log()
        if(data[i].id == id){
            product=data[i]
        }
    }

    

    const Container = styled.div`
        height: 500px;
        width: 900px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        display:  flex;
        justify-content: center;
        align-items: center;
        margin: 70px auto;
    `
    const Image = styled.img`
    height: 400px;
    width: 400px;
    margin: 10px;
    `
    const Button = styled.button`
        height: 40px;
        background-color: blue;
        font-size: larger;
        color: white;
        border: 1px solid black;
        border-radius: 5px;
        padding: 7px;
        margin:10px;
    `

    return <div>
        <Container key={id}>
                <div >
                <Image src={product.imageSrc} alt={product.title}/>
                </div>
               <div>
               <h1>{product.title}</h1>
               <br />
               <h1>Price: {product.price} $</h1>
               <Button>Add to Cart</Button>
               </div>

        </Container>
    </div>
    

}