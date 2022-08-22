import  styled  from 'styled-components'
import { Link } from 'react-router-dom'

export const Navbar = ()=>{

    const Nav = styled.div`
    height: 50px;
    width: 100%;
    display:  flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color:  blue;
    position:fixed;
    top: 0;
`

    const Parts = styled.div`
    width: 30%;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
  const White = styled.div`
      color: white;
      font-size: large;
      text-decoration:none;
  `
  const Cart = styled.div`
      background-color: white;
      height: 40px;
      width: 40px;
      border-radius: 50%;
  `
  const Buttons = styled.button`
      height: 30px;
      width: 70px;
      margin: 0px 10px;
      border-radius: 10px;
      border: none;
  `
return <Nav>
    <Parts><h1>MyStore.com</h1></Parts>
    <Parts>
        <Link to = '/' style={{"textDecoration":"none"}}> <White>Home</White></Link>
        <Link to = '/Products' style={{"textDecoration":"none"}}><White>Products</White></Link>
        <Link to = '/Add'style ={{"textDecoration":"none"}}> <White>Add</White></Link>
    </Parts>

  
</Nav>
}
