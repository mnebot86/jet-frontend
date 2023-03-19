import React from 'react';
import { Appearance } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import Main from 'src/Main';
import { LIGHT_THEME, DARK_THEME } from 'styles/themes';
import store from 'store';

export default App = () => {
	const colorScheme = Appearance.getColorScheme();

	const theme = colorScheme === 'dark' ? DARK_THEME : LIGHT_THEME;

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Main />
			</ThemeProvider>
		</Provider>
	);
};
