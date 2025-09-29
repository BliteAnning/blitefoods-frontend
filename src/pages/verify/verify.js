import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoredContext } from '../../Context/StoredContext';
import axios from "axios"

export const Verify = () => {
  const [searchParams, setSeachParams] = useSearchParams();
  const reference = searchParams.get("reference");
  const orderId = searchParams.get("orderId")
  const { url } = useContext(StoredContext)
  const navigate = useNavigate();
  console.log(reference, orderId)

 const verifyPayment = async () => {
  try {
    const response = await axios.post(url + "/api/order/verify", { reference, orderId });
    if (response.data.success) {
      navigate("/myorders");
    } else {
      console.log(response.data)
      navigate("/")
    }
  } catch (error) {
     console.log(error);
     
  }
    
  }
 useEffect(() => {
  if (reference && orderId) {
    verifyPayment();
  }
}, [reference, orderId]);



  return (
    <div className='verify'>
      <div className='spinner'></div>
    </div>
  )
}
