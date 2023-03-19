module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					alias: {
						images: './assets/images',
						src: './src',
						components: './src/components',
						navigation: './src/navigation',
						screens: './src/screens',
						services: './src/screens',
						store: './src/store',
						styles: './src/styles',
						utils: './src/utils',
					},
				},
			],
		],
	};
};
