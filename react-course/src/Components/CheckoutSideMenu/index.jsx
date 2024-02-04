import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShopingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'


const CheckoutSideMenu = () => {
    const context = useContext(ShopingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length ,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
    }

    return(
        <aside  className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout_side-menu flex-col fixed right-0 bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl bg-slate-200 w-10/12 justify-center border rounded-s-lg p-1'>Detail</h2>
                <div onClick={context.closeCheckoutSideMenu}>
                <XMarkIcon 
                className='h-8 w-8 text-black bg bg-slate-200 border rounded-full p-1 hover:bg-slate-300 cursor-pointer' />
            </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
                context.cartProducts.map( product => (
                    <OrderCard 
                    key={product.id}
                    id = {product.id} 
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    handleDelete= {handleDelete}
                    />
                ))
            }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to= '/my-orders/last'>
                    <button className='w-full bg-slate-300 py-3 rounded-lg hover:bg-slate-400'
                    onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu }