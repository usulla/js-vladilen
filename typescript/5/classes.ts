class Typescript {
    version: string
    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]:Typescript version is ${this.version}`
    }
}

class Car {
    readonly model: string
    readonly numberOfWheel: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}
// ~
class Car2 {
    readonly numberOfWheel: number = 4
    constructor(readonly model: string) { }
}
//===== Модификаторы
class Animal {
    protected voice: string = ''  // for class Animal and extends classes
    public color: string = 'color'

    private go() { // only for class Animal
        console.log('go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
        // this.go Error - private
    }

}

const cat = new Cat()
// cat.voice - error PROTECTED 
cat.setVoice('Hello') // public
console.log(cat.color) // public

//===== Абстрактные классы. Не во что не компилируются
abstract class Component {
    abstract render(): void
    abstract info(): string
}
class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }
    info(): string {
        return 'This is info'
    }
}
