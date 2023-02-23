import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../styles/Missions.css';

export default class Missions extends Component {
  render() {
    return (
      <div
        data-testid="missions"
      >
        <Title headline="Missões" />
        <div
          className="missions"
        >
          {missions.map((e) => (
            <MissionCard
              key={ e.name }
              name={ e.name }
              year={ e.year }
              country={ e.country }
              destination={ e.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}
