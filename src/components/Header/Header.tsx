import Image from "next/image";
import '@/styles/styles.css'
import { Menu } from "antd";
import { MenuProps } from "antd";
import { useState } from "react";


type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Concerts',
    key: 'bolos'
  },
  {
    label: 'Marxandatge',
    key: 'merxan'
  }
];



export default function Header() {

  const [current, setCurrent] = useState('mail');

  return (
    <div className="header">
   
        <Image alt='La Fulla' src='/media/LogoGROCFULLA.png' width='100' height = '100'>
            
        </Image>


     
      
    </div>
  );
}
