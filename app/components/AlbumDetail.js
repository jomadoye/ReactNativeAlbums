import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  Linking,
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 5,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  headerTextStyle: {
    fontSize: 15,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

const AlbumDetail = (props) => {
  const {
    album,
  } = props;
  const {
    thumbnail_image,
    title,
    artist,
    image,
    url,
  } = album;
  const {
    headerContentStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy now
        </Button>
      </CardSection>
    </Card>
  );
};

AlbumDetail.propTypes = {
  // album: PropTypes.shape({}).isRequired,
};


export default AlbumDetail;
