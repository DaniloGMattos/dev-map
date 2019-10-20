/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '../../store/ducks/modal';

import 'mapbox-gl/dist/mapbox-gl.css';
// import store from './store';

export class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = async (e) => {
    const [longitude, latitude] = e.lngLat;

    const { showModal } = this.props;

    await showModal({ longitude, latitude });
  };

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZGFuaWxvbWF0dG9zIiwiYSI6ImNqeHlsaDFwNTAwNm0zbnFsaWF6dnlxM3kifQ.dQQ4TrmC8iqflGGyU7iLpw"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <Marker
          latitude={-23.5439948}
          longitude={-46.6065452}
          onClick={this.handleMapClick}
          captureClick
        >
          <img
            alt="avatar"
            style={{
              borderRadius: 100,
              width: 48,
              height: 48,
            }}
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
          />
        </Marker>
      </MapGL>
    );
  }
}
const mapStateToProps = state => ({
  devLocations: state.devLocations,
});
// eslint-disable-next-line max-len
const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
