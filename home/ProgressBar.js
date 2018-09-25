//'use strict';
import PropTypes from 'prop-types';
import { NativeModules, requireNativeComponent, View, ViewPropTypes } from 'react-native';

var iface = {
  name: 'ProgressBar',
  propTypes: {
    progress: PropTypes.number,
    indeterminate: PropTypes.bool,
    orientation: PropTypes.string,
    ...ViewPropTypes // include the default view properties
  },
};


//module.exports = requireNativeComponent('ProgressBarView', iface);

var ProgressBar = requireNativeComponent('ProgressBarView', iface);
export default ProgressBar;