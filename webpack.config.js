
const cfgDev = require( "./dev.config" );
const cfgProduction = require( "./production.config" )
const { merge } = require('webpack-merge');


module.exports = ( env = {} ) => {

    const { MODE = 'development' } = env
    
    console.log( env );
    console.log( MODE );

    return [
        merge(cfgDev,
            { mode: "development", }
        ),
        merge(cfgProduction, 
            { mode: "production" }
        ),
    ]

}