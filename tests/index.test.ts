import { pipe } from "../src"

const getTimeOfDay = () => "morning"

const withGood = (str: string) => `good ${str}`

const greetName :(arg0: string, string) => string = (name: string, greeting: string) => `${greeting}, ${name}`


test("can pipe into multiple functions", () => {
    const greeting = pipe(
        null,
        getTimeOfDay,
        withGood
    )

    expect(greeting).toBe("good morning")
})


test("can pipe into function with additional args", () => {
    const greeting = pipe(
        null,
        getTimeOfDay,
        withGood,
        [greetName, "Micheal"]
    )

    expect(greeting).toBe("good morning, Micheal")
})