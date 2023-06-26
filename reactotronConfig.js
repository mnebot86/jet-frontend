import Reactotron, { networking } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron.configure({ name: 'MyApp' })
	.use(reactotronRedux(), networking({ ignoreUrls: /\/(logs|symbolicate)$/ }))
	.connect();

Reactotron.clear(); // Clear any previously logged data

console.tron = Reactotron; // Set Reactotron instance to a global variable
