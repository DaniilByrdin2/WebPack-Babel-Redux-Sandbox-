
const cfgDev = require( "./dev.config" );
const cfgProduction = require( "./production.config" )
const { merge } = require('webpack-merge');


module.exports = ( env = {} ) => {
    
    console.log( env );

    const prod = env.production

    if ( prod ) {
        return [
            merge(cfgProduction,
                { mode: "production" }
            ),
        ]
    } else {
        return [
            merge(cfgDev,
                { mode: "development", }
            )
        ]
    }

}