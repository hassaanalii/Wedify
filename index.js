/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Venue from './src/components/Venue';
import Event from './src/components/Event';
import ViewVenues from './src/components/ViewVenues';
import LandingPage from './src/components/LandingPage';
import ViewEmployees from './src/components/ViewEmployees';
import Updateemployees from './src/components/updateemployees';
import FetchData from './src/components/FetchData';


AppRegistry.registerComponent(appName, () => App);
