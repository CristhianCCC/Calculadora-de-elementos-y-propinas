import { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"
import { ActionDispatch } from "react"


type MenuItemProps = {
    item: MenuItem
    dispatch: ActionDispatch<[OrderActions]>
  }

export default function MenuItem({item, dispatch}: MenuItemProps) {
  return (
    <>
    <button className="border-2 border-teal-200 w-full p-3 flex justify-between hover:bg-teal-200 cursor-pointer" onClick={() => dispatch({type: 'add-item', payload: {item}})}>

        <p>{item.name}</p>
        <p className="font-black">$ {item.price}</p>

    </button>
    </>
  )
}
