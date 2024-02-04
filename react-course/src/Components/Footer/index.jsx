import {CameraIcon} from '@heroicons/react/24/solid'
import {PhoneIcon} from '@heroicons/react/24/solid'
import {UserIcon} from '@heroicons/react/24/solid'


const Footer = () => {
    return(
        <footer className="w-full bg-gray-300 end-0 p-10 text-center mt-3">
            <div>
                <ul className="flex justify-center mb-5">
                    <li className='flex mr-4'>
                        <CameraIcon className='w-6 h-6'/>
                        <a href="">ShopiMx</a>
                    </li>
                    <li className='flex mr-4'>
                        <PhoneIcon className='w-6 h-6'/>
                        <a href="">477148833</a>
                    </li>
                    <li className='flex mr-4'>
                        <UserIcon className='w-6 h-6'/>
                        <a href="">ShopiPersonal</a>
                    </li>
                </ul>
                <p className="justify-center"> Copyright © 1999-2024 El presente canal de instrucción o ambiente, es operado por DeRemate.Com de México, S. de R.L. de C.V. identificada bajo la marca comercial Shopi.
                    Blvd. Miguel de Cervantes Saavedra 161, Pisos 14 y 15, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX, México
                </p>
            </div>
            
        </footer>
    )
}

export {Footer}