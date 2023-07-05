type PlanetCardProps = {
  planetName: string,
  planetImage: string
};

function PlanetCard({ planetName, planetImage }: PlanetCardProps) {
  return (
    <div data-testid="planet-card" className="planetcard">
      <p data-testid="planet-name">{planetName}</p>
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
    </div>
  );
}

export default PlanetCard;
