import { useContext } from "react"
import { LayOut } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductoDetail"
import { ShopingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShopingCartContext)

  const renderView = () => {
      if(context.filteredItems?.length > 0) {
        return(
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {context.filteredItems?.map(item => (
            <Card key={item.id}data={item} />
         ))}
          </div>
          
        )
      } else {
        return (
          <div className="flex items-center relative justify-center p-2 rounded-lg m-4 font-semibold bg-slate-400">
            Not found
          </div>
        )
      }  
    
  }

  return (
    <LayOut>
      <div className='flex w-80 items-center relative justify-center'>
          <h1 className='mb-4 font-medium'>Exclusive Products</h1>
        </div>
        <input type="text" 
            placeholder="Search a product" 
            className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
            onChange={(event) => context.setSearchByTitle(event.target.value)}
          />
      <div>
      {renderView()}
      </div>
      <ProductDetail/>
    </LayOut>
  )
}

export default Home
