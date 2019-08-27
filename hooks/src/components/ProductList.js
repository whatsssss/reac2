import React,{userState} from 'react'

export default function ProductList(props){

    const items = [
        {pno:1, name:'연필', price:500},
        {pno:2, name:'2연필', price:2500},
        {pno:3, name:'3연필', price:3500},
        {pno:4, name:'4연필', price:4500}
    ]

    const addCart = (pno) => (
        console.log("pno : " + pno )
        
    )

    // const cartList = {

    // }
    //const [cart, setCart] = userState([])

    const itemList = items.map( ({pno,name,price})=>
            <li key={pno}>{name} = {price}
                <input type = 'checkbox' onChange = {()=>addCart(pno)}></input>
            </li> )

    return(

        <div>
            <ul>
                 {itemList}
            </ul>
            <hr/>
            <h2>Total</h2>

        </div>
    )

}