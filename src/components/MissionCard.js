import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/MissionCard.css';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div
        className="MissionCardContainer"
        data-testid="mission-card"
      >
        <p
          className="mission-name"
          data-testid="mission-name"
        >
          {name}
        </p>
        <p
          className="mission-year"
          data-testid="mission-year"
        >
          {year}
        </p>
        <p data-testid="mission-country">
          {country}
        </p>
        <p data-testid="mission-destination">
          {destination}
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
