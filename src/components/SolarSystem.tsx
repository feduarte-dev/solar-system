import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  return (
    <div data-testid="solar-system" className="planets">
      <Title headline="Planetas" />
      {planets.map(({ name, image }) => (<PlanetCard
        key={ name }
        planetName={ name }
        planetImage={ image }
      />))}
      <hr />
    </div>
  );
}

export default SolarSystem;
