import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShopingCartContext } from "../../Context"
import {UserCircleIcon} from '@heroicons/react/24/solid'

const Navbar = () => {
    const context = useContext(ShopingCartContext)
    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-slate-200'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li className='hover:underline'>
                    <NavLink 
                    to='/'
                    onClick={() => context.setSearchByCategory()}
                    className={({isActive}) => 
                    isActive ? activeStyle: undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li className='hover:underline'>
                    <NavLink 
                    to='/clothes'
                    onClick={() => context.setSearchByCategory('clothes')}
                    className={({isActive}) => 
                    isActive ? activeStyle: undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li className='hover:underline'>
                    <NavLink 
                    to='/electronics'
                    onClick={() => context.setSearchByCategory('electronics')}
                    className={({isActive}) => 
                    isActive ? activeStyle: undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li className='hover:underline'>
                    <NavLink 
                    to='/furnitures'
                    onClick={() => context.setSearchByCategory('furnitures')}
                    className={({isActive}) => 
                    isActive ? activeStyle: undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li className='hover:underline'>
                    <NavLink 
                    to='toys'
                    onClick={() => context.setSearchByCategory('toys')}
                    className={({isActive}) => 
                    isActive ? activeStyle: undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li className='hover:underline'>
                    <NavLink 
                    to='others'
                    onClick={() => context.setSearchByCategory('others')}
                    className={({isActive}) => 
                    isActive ? activeStyle: undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='flex hover:underline'>
                    <UserCircleIcon className='w-4 h-5'/>
                    paulovalensuel@hotmail.com
                </li>
                <li className='hover:underline'>
                    <NavLink to='/my-orders'>
                        My Orders
                    </NavLink>
                </li>
                <li className='hover:underline'>
                    <NavLink to='/my-account'>
                        My Account
                    </NavLink>
                </li>
                <li className='hover:underline'>
                    <NavLink to='/sing-in'>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex justify-center items-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-black'/>{context.cartProducts.length}
                </li>
            </ul>
        </nav>
    )
}

export { Navbar }