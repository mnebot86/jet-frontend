module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					alias: {
						icons: './src/images/icons',
						logos: './src/images/logos',
						placeholders: './src/images/placeholders',
						src: './src',
						components: './src/components',
						navigation: './src/navigation',
						screens: './src/screens',
						services: './src/services',
						store: './src/store',
						styles: './src/styles',
						utils: './src/utils',
					},
				},
			],
			[
				'module:react-native-dotenv',
				{
					envName: 'APP_ENV',
					moduleName: '@env',
					path: '.env',
				},
			],
			'react-native-reanimated/plugin',
		],
	};
};
