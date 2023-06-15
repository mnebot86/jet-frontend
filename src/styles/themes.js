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
	primaryLogo: require('logos/jetsLogoLight.png'),
	primaryNavigationTintColor: navyBlue,
	primaryCheckMarkColor: navyBlue,
	primaryInputBackgroundColor: lightGray,
	primaryInputBorderColor: darkGray,
	primaryInputTextColor: coal,
	primaryActiveIconColor: gold,
	primaryInactiveIconColor: navyBlue,
};

export const DARK_THEME = {
	primaryBackground: black,
	primaryText: white,
	primaryButtonColor: gold,
	primaryButtonText: navyBlue,
	primaryLogo: require('logos/jetsLogoDark.png'),
	primaryNavigationTintColor: gold,
	primaryCheckMarkColor: gold,
	primaryInputBackgroundColor: coal,
	primaryInputBorderColor: coal,
	primaryInputTextColor: light,
	primaryActiveIconColor: gold,
	primaryInactiveIconColor: navyBlue,
};
