import { useRoutes, BrowserRouter } from 'react-router-dom' 
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import './App.css'
import { Navbar } from '../../Components/Navbar'
import { ShopingCartProvider } from '../../Context'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import {Footer} from '../../Components/Footer'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/clothes', element: <Home />},
    {path: '/electronics', element: <Home />},
    {path: '/furnitures', element: <Home />},
    {path: '/toys', element: <Home />},
    {path: '/others', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-orders/last', element: <MyOrder />},
    {path: '/my-orders/:id', element: <MyOrder />},
    {path: '/*', element: <NotFound />},
    {path: '/sing-in', element: <SingIn />}
  ])
  return routes;
}

function App() {
  return (
    <ShopingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
        <CheckoutSideMenu/>
        <Footer/>
      </BrowserRouter>
    </ShopingCartProvider>
  )
}

export default App
