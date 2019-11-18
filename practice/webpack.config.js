const path = require('path');

module.exports={
    name: 'wordrelay',
    mode: 'development',
    devtool: 'eval',
    resolve:{
        extensions:['.js', '.jsx']
    },

    entry: {
        app:['./client.jsx']

    },

    module: {
        rules:[{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options:{
                presets: ['@babel/preset-env','@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties']
            }
        }]

    },

    output:{
        path: path.join(__dirname,'dist'), //C://users/llllllll
        filename: 'app.js'
    }

};