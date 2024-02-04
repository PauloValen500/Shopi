import {ShoppingBagIcon} from '@heroicons/react/24/solid'
import {CalendarIcon} from '@heroicons/react/24/solid'
import {ChevronRightIcon} from '@heroicons/react/24/solid'

const OrdersCard = props  => {
    const { totalPrice, totalProducts} = props

    return(
        <div className="flex justify-between items-center mb-3 w-80 p-2 border border-slate-200 bg-slate-200 rounded-lg hover:bg-slate-300">
                <div className='flex flex-col'>
                    <div className='flex'>
                        <CalendarIcon className='w-6 h-6'/>
                        <span className='ml-1'>01.02.23</span>
                    </div>
                    <div className='flex mt-2'>
                        <ShoppingBagIcon className='w-6 h-6'/>
                        <span className='ml-1'>{totalProducts} articles</span>
                    </div>
                </div>
                <div className='flex'>
                    <span>Total ${totalPrice}</span>
                    <ChevronRightIcon className='w-6 h-6'/>            
                </div>
        </div>
 )
}

export default OrdersCard