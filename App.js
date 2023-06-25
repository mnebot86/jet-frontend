import React from 'react';
import { Appearance } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import Main from 'src/Main';
import { Toast } from 'components';
import { LIGHT_THEME, DARK_THEME } from 'styles/themes';
import store from 'store';

const App = () => {
	const colorScheme = Appearance.getColorScheme();

	const theme = colorScheme !== 'dark' ? DARK_THEME : LIGHT_THEME;

	return (
		<Provider store={store}>
			<ThemeProvider theme={LIGHT_THEME}>
				<Toast />
				<Main />
			</ThemeProvider>
		</Provider>
	);
};

export default App;
