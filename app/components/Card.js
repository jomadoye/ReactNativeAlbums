import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

const Card = (props) => {
  const {
    children,
  } = props;
  const {
    containerStyle,
  } = styles;
  return (
    <View style={containerStyle}>
      {children}
    </View>
  );
};

Card.propTypes = {
  // children: PropTypes.shape([]).isRequired,
};

export default Card;
