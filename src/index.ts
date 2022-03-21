export const pipe: any = (initExpression: any, ...args: Array<any>) => {
    let e = initExpression

    for (const arg of args) {
        // arg could be a function
        if (typeof arg === 'function') {
            e = arg(e)
        }

        if (Array.isArray(arg)) {
            e = arg[0](...arg.slice(1), e)
        }
    }
}

export const compose: Function = (fnL: Function, fnR: Function) => (x: any) =>
    fnR(fnL(x))
