import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { ShopingCartContext } from '../../Context'

const ProductDetail = () => {
const context = useContext(ShopingCartContext)

    return(
        <aside  className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 bg-white`}>
            <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl bg-slate-200 w-10/12 justify-center border rounded-s-lg p-1'>Detail</h2>
        <div onClick={context.closeProductDetail}>
            <XMarkIcon className='h-8 w-8 text-black bg bg-slate-200 border rounded-full p-1 hover:bg-slate-300 cursor-pointer' />
        </div>
            </div>
            <figure className='px-6'>
                <img 
                className='w-full h-full rounded-lg' 
                src={context.productToShow.images} 
                alt={context.productToShow.title}/>
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export { ProductDetail }