import React, { useContext } from 'react'
import {useSearchParams} from 'react-router-dom';
import { StoredContext } from '../../Context/StoredContext';

export const verify = () => {
    const [searchParams, setSeachParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoredContext)



  return (
    <div>verify</div>
  )
}
