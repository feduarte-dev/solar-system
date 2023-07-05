type MissionCardProps = {
  name: string,
  year: string,
  country: string,
  destination: string
};

function MissionCard({ name, year, country, destination }: MissionCardProps) {
  return (
    <div data-testid="mission-card" className="missioncard">
      <p data-testid="mission-name">{name}</p>
      <p data-testid="mission-year">{`Data: ${year}`}</p>
      <p data-testid="mission-country">{`Origem: ${country}`}</p>
      <p data-testid="mission-destination">{`Destino: ${destination}`}</p>
    </div>
  );
}
export default MissionCard;
