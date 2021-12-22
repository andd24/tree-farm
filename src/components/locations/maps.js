import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '75%',
  height: '75%',
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    );
  }
}

MapContainer = GoogleApiWrapper({
  apiKey: 'AIzaSyAkeC_Hv3O5fCcrNqyxOqJ1zJ2viB4l2BY'
})(MapContainer);