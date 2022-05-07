import React from 'react'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


export default function EmptyCart() {
    console.log("Empty");
  return (
   <>
        <div style={{textAlign: "center"}}>
            <img style={{width: "70%"}} src="https://www.apnashopping.in/assets/img/payment/Empty-Cart.jpg"
             alt="" />
        </div>

        <div style={{textAlign: "center", marginTop : "20px"}}>
        <Link to={"/"}>
        <Button variant="contained" size="large">SHOP NOW</Button>
        </Link>
        </div>
   </>
  )
}
