import React from 'react'
import { Menu } from './model/restuarnt'

interface OwnProps extends Omit<Menu, 'price'>{
    showBestMenuName(name:string):string //추가하려면 여기다가 쓰면됨.
}
//type 으로 쓰려면
// type OwnProps = Menu & {
//     showBestMenuName(name:string):string
// }

const BestMenu : React.FC<OwnProps> = ({name, category, showBestMenuName}) => {
  return (
    <div>
        <div>{name}</div>
        <div>{category}</div>
        <div>{showBestMenuName(name)}</div>
    </div>
  )
}

export default BestMenu