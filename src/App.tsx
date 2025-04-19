import { useReducer } from "react";
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentage from "./components/TipPercentage";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {

  /**
   * importando el hook de order y la funcion de addItem
   */
  const { placeOrder} = useOrder();

  const [state, dispatch] = useReducer(orderReducer, initialState)

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
            dispatch = {dispatch}
            />
          ))}
        </div>
    </div>
    <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10 font-black">
          {/**
           * vaciando el componente de orderContents e importando el hook de useOrder
           */}
          <OrderContents
            order={state.order}
            dispatch={dispatch} 
          />

          <TipPercentage
            dispatch = {dispatch}
            tip = {state.tip}
          />

          <OrderTotals
            order={state.order}
            tip ={state.tip}
            dispatch ={dispatch}
          />
    </div>
    </main>

    </>
  )
}

export default App
