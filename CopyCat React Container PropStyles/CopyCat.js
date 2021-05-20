//in this project we are slicing the component to a presentational and container component. 
import React from 'react';
import {styles} from '../styles';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

//This is going to be our presentational component class.
export class CopyCat extends React.Component {
    
  render() {
    const {copying, toggleTape, value,handleChange, name} = this.props

    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: 80}}>Copy Cat {name || "Tom"}</h1>
        <input 
        type='text'
        value={value}
        onChange={handleChange}
        />
        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          styles={styles.imgStyles}
          onClick={toggleTape}
        />
        <p>{copying && value}</p>
      </div>
    );
  };
}

//proptypes
CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string
}