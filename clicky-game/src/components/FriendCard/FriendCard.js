import React from "react";
import PropTypes from 'prop-types';
import "./FriendCard.css";

class FriendCard extends React.Component {

  render () {

    const { name, image, occupation, location } = this.props

    return (
      <div className="card">
        <div className="img-container">
          <img alt={name} src={image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {name}
            </li>
            <li>
              <strong>Occupation:</strong> {occupation}
            </li>
            <li>
              <strong>Location:</strong> {location}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

FriendCard.propTypes = {
  name: PropTypes.string,
  occupation: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string
}

export default FriendCard;
