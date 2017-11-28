import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  View,
  ScrollView,
} from 'react-native';
import AlbumDetail from './AlbumDetail';

const styles = {
  containerStyle: {

  },
};

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
    };

    this.renderAlbum = this.renderAlbum.bind(this);
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => {
        this.setState({
          albums: response.data,
        });
      });
  }

  renderAlbum() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    const {
      containerStyle,
    } = styles;
    return (
      <ScrollView style={containerStyle}>
        {this.renderAlbum()}
      </ScrollView>
    );
  }
}

AlbumList.propTypes = {
  // headerText: PropTypes.string.isRequired,
};


export default AlbumList;
