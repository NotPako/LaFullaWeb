import Image from "next/image";
import '@/styles/styles.css';
import '@/components/Header/Header.css';
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

interface HeaderProps {
  landingRef: React.RefObject<HTMLDivElement | null>
  gigsRef: React.RefObject<HTMLDivElement | null>;
}



export default function Header({ landingRef, gigsRef }: HeaderProps) {

  const [current, setCurrent] = useState('mail');

  return (
    <div className="header">
        <div className='titolFulla'>
          <h2>LA FULLA</h2>
        </div>
        <Image alt='La Fulla' src='/media/LogoGROCFULLA.png' width='100' height = '100' className='logo'>
            
        </Image>
        <div className="menu">
          <div className= 'menuItem'  onClick={() => gigsRef.current?.scrollIntoView({ behavior: "smooth" , block: "end"})} ><h1>Concerts</h1></div>
          <div className= 'menuItem'><h1>Merxandatge</h1></div>
          <div className= 'menuItem'><h1>Contacte</h1></div>
          <div className= 'menuItem'><h1>Discografia</h1></div>
        </div>


     
      
    </div>
  );
}
