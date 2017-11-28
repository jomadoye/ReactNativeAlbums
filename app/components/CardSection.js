import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#DDD',
    position: 'relative',
  },
};

const CardSection = (props) => {
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

CardSection.propTypes = {
  // children: PropTypes.shape({}).isRequired,
};

export default CardSection;
