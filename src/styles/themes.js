import {
	white,
	black,
	navyBlue,
	gold,
	lightGray,
	darkGray,
	coal,
	light,
	un,
} from './colors';

export const LIGHT_THEME = {
	primaryBackground: white,
	primaryText: black,
	primaryButtonColor: navyBlue,
	primaryButtonText: gold,
	primaryLogo: require('images/logos/jetsLogo.png'),
	primaryNavigationTintColor: navyBlue,
	primaryCheckMarkColor: navyBlue,
	primaryInputBackgroundColor: lightGray,
	primaryInputBorderColor: darkGray,
	primaryInputTextColor: coal,
};

export const DARK_THEME = {
	primaryBackground: black,
	primaryText: white,
	primaryButtonColor: gold,
	primaryButtonText: navyBlue,
	primaryLogo: require('images/logos/jetsLogo-dark.png'),
	primaryNavigationTintColor: gold,
	primaryCheckMarkColor: gold,
	primaryInputBackgroundColor: coal,
	primaryInputBorderColor: coal,
	primaryInputTextColor: light,
};
