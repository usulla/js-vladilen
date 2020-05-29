interface Rect {
    readonly id: string;
    color?: string;
    size: {
        width: number;
        height: number;
    };
}
declare const rect1: Rect;
declare const rect2: Rect;
declare const rect3: Rect;
declare const rect4: Rect;
interface RectWithArea extends Rect {
    getArea: () => number;
}
declare const rect5: RectWithArea;
interface IClock {
    time: Date;
    setTime(date: Date): void;
}
declare class Clock implements IClock {
    time: Date;
    setTime(date: Date): void;
}
interface Styles {
    [key: string]: string;
}
declare const css: Styles;
