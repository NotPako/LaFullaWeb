import Image from "next/image";
import '@/styles/styles.css';
import '@/components/Header/Header.css';





interface HeaderProps {
  landingRef: React.RefObject<HTMLDivElement | null>
  gigsRef: React.RefObject<HTMLDivElement | null>;
  merxRef: React.RefObject<HTMLDivElement | null>;
  discografiaRef: React.RefObject<HTMLDivElement | null>;
}



export default function Header({ landingRef, gigsRef, discografiaRef }: HeaderProps) {



  return (
    <div className="header">
        <div className='titolFulla'>
          <h2>LA FULLA</h2>
        </div>
        <div onClick={() => landingRef.current?.scrollIntoView({ behavior: "smooth" , block: "start"})}>
        <Image alt='La Fulla' src='/media/LogoGROCFULLA.png' width='100' height = '100' className='logo'/>
        </div>
       
            
       
        <div className="menu">
          <div className= 'menuItem' onClick={() => gigsRef.current?.scrollIntoView({ behavior: "smooth" , block: "start"})}><h1>Merxandatge</h1></div>
          <div className= 'menuItem'><h1>Contacte</h1></div>
          <div className= 'menuItem' onClick={() => discografiaRef.current?.scrollIntoView({ behavior: "smooth" , block: "start"})}><h1>Discografia</h1></div>
        </div>


     
      
    </div>
  );
}
