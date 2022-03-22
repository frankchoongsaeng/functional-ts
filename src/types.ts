/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * A type that represents a function
 */
export type FunctionType = (...args: any[]) => any

/**
 * A type that represents a function, or a list
 * having it's first item as a function and any other type.
 * Callables' can be passed to a pipe function
 */
export type Callable = FunctionType | [FunctionType, ...any[]]
