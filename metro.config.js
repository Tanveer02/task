const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

// Get default Metro configuration
const defaultConfig = getDefaultConfig(__dirname);

// Extract necessary properties from default config
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
    transformer: {
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
    },
    resolver: {
        assetExts: assetExts.filter(ext => ext !== 'svg'),
        sourceExts: [...sourceExts, 'svg'],
        resolverMainFields: ["sbmodern", "react-native", "browser", "main"],
    },
    watchFolders: [path.resolve(__dirname, "../")],
};

module.exports = mergeConfig(defaultConfig, config);