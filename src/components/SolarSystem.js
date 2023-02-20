import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../styles/SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div
        data-testid="solar-system"
        className="solar-system"
      >
        <Title headline="Planetas" />
        <div className="planets">
          {planets.map((e) => (
            <PlanetCard
              key={ e.name }
              planetName={ e.name }
              planetImage={ e.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
