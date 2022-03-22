/**
 * A type that represents a function
 */
export type FunctionType = (...args: Array<unknown>) => unknown

/**
 * A type that represents a function, or a list
 * having it's first item as a function and any other type.
 * Callables' can be passed to a pipe function
 */
export type Callable = FunctionType | [FunctionType, ...unknown[]]
