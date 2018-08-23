var path = require('path');
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

module.exports = function () {
    var envName = 'dev';

    if(process.env.ENV){
        envName = process.env.ENV;
    }

    useDefaultConfig[envName] = useDefaultConfig.dev;
    useDefaultConfig[envName].resolve.alias = {
        "@env": path.resolve(__dirname + '/config.' + envName + '.ts'),
    };

    return useDefaultConfig;
};