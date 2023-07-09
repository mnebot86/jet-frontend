import React from 'react';
import { Appearance } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { Provider } from 'react-redux';
import Main from 'src/Main';
import { Toast } from 'components';
import { LIGHT_THEME, DARK_THEME } from 'styles/themes';
import store from 'store';
import 'react-native-get-random-values';

if (__DEV__) {
	import('./reactotronConfig');
}

const App = () => {
	const config = {
		useSystemColorMode: true,
	};

	const customTheme = extendTheme({ config });
	const colorScheme = Appearance.getColorScheme();

	const theme = colorScheme !== 'dark' ? DARK_THEME : LIGHT_THEME;

	return (
		<Provider store={store}>
			<ThemeProvider theme={LIGHT_THEME}>
				<NativeBaseProvider theme={customTheme}>
					<Toast />
					<Main />
				</NativeBaseProvider>
			</ThemeProvider>
		</Provider>
	);
};

export default App;
