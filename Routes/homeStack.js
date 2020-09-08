import { createStackNavigator } from 'react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import App from '../App';
import Login2 from '../Login2';

const screens = {
    Home: {
        Screen: App
    },
    Login2: {
        Screen: Login2
    },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);