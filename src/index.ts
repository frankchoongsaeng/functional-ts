import { Callable, FunctionType } from './types'

/**
 * Pipes the output of one function as an input to the next function.<br />
 * the input to every function is passed in as the last argument.<br />
 * This allows additional arguements to be passed to the function by<br />
 * specifying it in a list where the function is the first item in the list<br /><br />
 *
 * @example
 *      pipe (null, fn1, fn2, fn3) //returns the final output of fn3
 *      pipe ("starting value", fn1, [fn2, "fn2 value"])
 * @param {any} initExpression  an initial value to pipe into the first function as a last param
 * @param {Function | Array} args a list of functions that will get called serially with the output of the previous function as a last input
 * @returns {any} final value of the last invoked function.
 */
export const pipe: (i: unknown, ...args: Array<Callable>) => unknown = (
    initExpression,
    ...args
) => {
    let v = initExpression

    for (const arg of args) {
        // arg could be a function
        if (typeof arg === 'function') v = arg(v)
        else if (Array.isArray(arg)) v = arg[0](...arg.slice(1), v)
        else
            throw new Error(
                "Invalid arg: expected 'function' but found " + typeof arg
            )
    }

    return v
}

export const compose: (fnL: FunctionType, fnR: FunctionType) => FunctionType =
    (fnL, fnR) => (x: unknown) =>
        fnR(fnL(x))
