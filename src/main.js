class App {
    run = async ( name = "World" ) => {
        console.log(`Htllo ${name}`);
        console.log( [1,2,3 [2,3]].flat() );
    }
}

const app = new App()
app.run().then( () => console.log( "123" ) ).catch( res => console.log(res) )