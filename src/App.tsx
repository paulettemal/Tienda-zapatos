import { Outlet } from "react-router-dom";
import BotonCarrito from "./components/BotonCarrito";

function App() {
  return (
    <>
      <div className='flex flex-col bg-white h-screen w-screen '>
        <div className='p-3 bg-white shadow-sm flex justify-between top-0 z-50'>
          <div className="ml-[12vw] mt-2 ">
            <img src="logo.svg" className='w-[100px] h-[24px] ' alt="Logo" />
          </div>
          <div>
            <BotonCarrito text="View Card" img="cartera.svg" />
          </div>
        </div>
        <div className='flex-1 overflow-auto'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App;