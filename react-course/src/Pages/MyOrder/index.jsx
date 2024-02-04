import { LayOut } from "../../Components/Layout"
import { useContext } from 'react'
import { ShopingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

function MyOrder() {
  const context = useContext(ShopingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
if(index ==='last') index = context.order?.length -1

    return (
      <LayOut>
        <div className='flex w-80 items-center relative justify-center mb-6 font-bold'>
          <Link to='/my-orders' className='absolute left-0'>
            <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
          </Link>
          <h1>My Order</h1>
        </div>
        <div className='flex flex-col w-80 mt-3'>
            {
                context.order?.[index]?.products.map( product => (
                    <OrderCard 
                    key={product.id}
                    id = {product.id} 
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    />
                ))
            }
            </div>
      </LayOut>
    )
  }
  
  export default MyOrder