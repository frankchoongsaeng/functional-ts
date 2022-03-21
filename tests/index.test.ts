import { compose, pipe } from '../src'

const getTimeOfDay = () => 'morning'

const withGood = (str: string) => `good ${str}`

const greetName: (name: string, greeting: string) => string = (
    name,
    greeting
) => `${greeting}, ${name}`

describe('pipe test', () => {
    test('can pipe into multiple functions', () => {
        const greeting = pipe(null, getTimeOfDay, withGood)

        expect(greeting).toBe('good morning')
    })

    test('can pipe into function with additional args', () => {
        const greeting = pipe(null, getTimeOfDay, withGood, [
            greetName,
            'Micheal',
        ])

        expect(greeting).toBe('good morning, Micheal')
    })

    test('can pipe with starting value', () => {
        const greeting = pipe('evening', withGood, [greetName, 'frank'])

        expect(greeting).toBe('good evening, frank')
    })

    test('should throw invalid arg type exception', () => {
        expect(() => pipe(null, 'a string here')).toThrowError(
            /.*[Ii]nvalid arg.*/
        )
    })
})


describe("test compose", () => {

    test("should compose getTimeOfDay with withGood", () => {
        let composedFunction = compose(getTimeOfDay, withGood)
        expect(composedFunction()).toEqual("good morning")
    })
})