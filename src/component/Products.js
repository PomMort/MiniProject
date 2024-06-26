import React, { useEffect } from 'react'
import ListProdutcs from './ListProdutcs';
import ProductDetail from './ProductsDetail';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';




export default function Products() {
  const { status } = useSelector((state) => state.productListData)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_DATA" });
  }, [dispatch]);



  if (!status) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      </div>
    )
    } else {
      return (
        <div className='grid grid-cols-2 w-4/5 m-auto gap-10 my-20' >

          <ProductDetail />
          <ListProdutcs />


        </div>



      )

  }

}
