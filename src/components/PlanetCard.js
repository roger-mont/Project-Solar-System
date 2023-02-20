import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/PlanetCard.css';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div
        className="planet-card"
        data-testid="planet-card"
      >
        <p
          className="planet-name"
          data-testid="planet-name"
        >
          {planetName}
        </p>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className="planet-image"
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};
