import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';

const styles = {
  header: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative',
  },
};

const Header = (props) => {
  const {
    headerText,
  } = props;
  const {
    header,
    viewStyle,
  } = styles;
  return (
    <View style={viewStyle}>
      <Text style={header}>{headerText}</Text>
    </View>
  );
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default Header;
