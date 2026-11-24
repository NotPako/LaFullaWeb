import './Membres.css';

interface Membre {
  nom: string;
  instrument: string;
}

// Agrupats per secció de la banda; dins de cada grup, l'ordre en què es mostren
const SECCIONS: { titol: string; membres: Membre[] }[] = [
  {
    titol: 'Veus',
    membres: [
      { nom: 'Salva Carbonell Bustos', instrument: 'Veu' },
      { nom: 'Guillem Romero Miralles', instrument: 'Veu i dolçaina' },
    ],
  },
  {
    titol: 'Vents',
    membres: [
      { nom: 'Ana Isabel Porcar Vicente', instrument: 'Trombó' },
      { nom: 'Arnau Chacón Albero', instrument: 'Trombó' },
      { nom: 'Martí Lluch Ferrer', instrument: 'Trompeta' },
      { nom: 'Adrià Alcamí López', instrument: 'Saxo' },
    ],
  },
  {
    titol: 'Secció rítmica',
    membres: [
      { nom: 'Caterina Giorgi', instrument: 'Teclat' },
      { nom: 'Carles Boscà Martínez', instrument: 'Guitarra' },
      { nom: 'Vicent de Castro Soriano', instrument: 'Guitarra' },
      { nom: 'Óscar Sanchis Fernandez', instrument: 'Baix elèctric' },
      { nom: 'Pablo Juan Grau', instrument: 'Bateria' },
    ],
  },
];

export default function Membres() {
  return (
    <section className="membres-section">
      <div className="membres-inner">
        <div className="membres-header">
          <h2 className="membres-title">El grup</h2>
          <p className="membres-subtitle">Qui som</p>
        </div>

        <div className="membres-seccions">
          {SECCIONS.map(({ titol, membres }) => (
            <div key={titol} className="membres-grup">
              <h3 className="membres-grup-titol">
                <span className="membres-grup-linia" aria-hidden="true" />
                {titol}
                <span className="membres-grup-linia membres-grup-linia--dreta" aria-hidden="true" />
              </h3>
              <ul className="membres-llista">
                {membres.map(({ nom, instrument }) => (
                  <li key={nom} className="membre">
                    <span className="membre-instrument">{instrument}</span>
                    <span className="membre-nom">{nom}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
