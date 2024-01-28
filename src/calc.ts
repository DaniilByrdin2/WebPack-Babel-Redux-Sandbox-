export default class Calc {
    add( ...arg: any ) {
        return arg.reduce( (a:any,b:any) => { return a + b }, 0 )
    }
}