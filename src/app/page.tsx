import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Landing from '@/Views/Landing/Landing';
import Merx from '@/Views/Merx/Merx';
import Discografia from '@/Views/Discografia/Discografia';
import Contacto from '@/Views/Contacto/Contacto';
import Xarxes from '@/Views/Xarxes/Xarxes';

// Componente de servidor: solo hidratan en el navegador las secciones que lo necesitan.
// Los id son los destinos del menú de Header
export default function Home() {
  return (
    <div className="page-root">
      <div>
        <Header />
        <div className="flex flex-col">
          <div id="inici"><Landing /></div>
          <div id="merx"><Merx /></div>
          <div id="discografia"><Discografia /></div>
          <div id="contacte"><Contacto /></div>
          <div id="xarxes"><Xarxes /></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
