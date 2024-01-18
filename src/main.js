class App {
    run = async ( name = "World" ) => {
        console.log(`Htllo ${name}`);
    }
}

const app = new App()
app.run().then( () => console.log( "123" ) ).catch( res => console.log(res) )