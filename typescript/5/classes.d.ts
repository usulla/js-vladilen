declare class Typescript {
    version: string;
    constructor(version: string);
    info(name: string): string;
}
declare class Car {
    readonly model: string;
    readonly numberOfWheel: number;
    constructor(theModel: string);
}
declare class Car2 {
    readonly model: string;
    readonly numberOfWheel: number;
    constructor(model: string);
}
declare class Animal {
    protected voice: string;
    color: string;
    private go;
}
declare class Cat extends Animal {
    setVoice(voice: string): void;
}
declare const cat: Cat;
declare abstract class Component {
    abstract render(): void;
    abstract info(): string;
}
declare class AppComponent extends Component {
    render(): void;
    info(): string;
}
