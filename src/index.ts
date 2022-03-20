const pipe : any = (initExpression: any, ...args: Array<any>) => {
    let e = initExpression;

    for (const arg of args) {
        
        // arg could be a function 
        if (typeof arg === 'function') {
            arg(e)
        }
        
        if (Array.isArray(arg)) {
            arg[0](...arg.slice(1))
        }
    }
}