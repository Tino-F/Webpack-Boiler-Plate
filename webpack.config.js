const path = require('path');

module.exports = {
    "mode": "development",
    "entry": "./entry.js",
    "output": {
        "path": __dirname+'/dist',
        "filename": "bundle.js",
        "libraryTarget": "var",
        "library": "MyLibrary"
    },
    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "env"
                        ]
                    }
                }
            }
        ]
    }
}
