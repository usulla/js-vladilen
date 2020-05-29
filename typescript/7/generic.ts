const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5]
const arrayOfStrings: Array<string> = ['Hello', 'Maria']

function revers<T>(array: T[]): T[]{
    return array.reverse()
}

revers(arrayOfNumbers)
revers(arrayOfStrings)