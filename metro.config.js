// metro.config.js
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

// Step A: Base Metro config
const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;
const baseConfig = {
    transformer: {
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
        getTransformOptions: async () => ({
            transform: { experimentalImportSupport: false, inlineRequires: true },
        }),
    },
    resolver: {
        assetExts: assetExts.filter(ext => ext !== 'svg'),
        sourceExts: [...sourceExts, 'svg'],
        resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
    },
    watchFolders: [path.resolve(__dirname, '../')],
};

// Step B: Merge with defaults
const mergedConfig = mergeConfig(defaultConfig, baseConfig);

// Step C: Wrap with Reanimated (for proper worklet stack and functionality)
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
