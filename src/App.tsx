import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentage from "./components/TipPercentage";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  /**
   * importando el hook de order y la funcion de addItem
   */
  const {order, addItem, removeItem, tip, setTip, placeOrder} = useOrder();

  return (


    <>

    <header className="bg-teal-400 py-5">
      <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
    </header>


    <main className="max-w-7xl mx-auto my-20 md:grid grid-cols-2">
    <div className="p-5">
      <h2 className="text-4xl font-black text-center">Menu</h2>
        <div className="space-y-3 mt-10">
          {/**
           * vaciando el componente de MenuItem
           */}
          {menuItems.map(item => (
            <MenuItem
            key={item.id}
            item={item}
            addItem={addItem}
            />
          ))}
        </div>
    </div>
    <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10 font-black">
          {/**
           * vaciando el componente de orderContents e importando el hook de useOrder
           */}
          <OrderContents
            order={order}
            removeItem={removeItem} 
          />

          <TipPercentage
            setTip = {setTip}
            tip = {tip}
          />

          <OrderTotals
            order={order}
            tip ={tip}
            placeOrder ={placeOrder}
          />
    </div>
    </main>

    </>
  )
}

export default App
