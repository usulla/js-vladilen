const str: string = 'Hello'
console.log(str)

const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello TS'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const world: string[] = ['Hello', 'TS']

//Tuple
const contact: [string, number] = ['Hello', 12345]

//Any
let variable: any = 42
variable = 'new String'

function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Maria')

// Never
function trowError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {

    }
}

// Type alias
type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 12234
const id2: ID = '12234'

type SomeType = string | null | undefined