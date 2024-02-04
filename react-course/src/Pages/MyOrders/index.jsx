import { useContext } from 'react'
import { LayOut } from "../../Components/Layout"
import OrdersCard  from "../../Components/OrdersCard"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

import { ShopingCartContext } from '../../Context'

function MyOrders() {
  const context = useContext(ShopingCartContext)


    return (
      <LayOut>
        <div className='flex w-80 items-center relative justify-center'>
          <h1 className='mb-4'>My Orders</h1>
        </div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts}/>
            </Link>
          ))
        }
      </LayOut>
    )
  }
  
  export default MyOrders