declare function add(a: number, b: number): number;
declare function toUpperCase(str: string): string;
interface MyPosition {
    x: number | undefined;
    y: number | undefined;
}
interface MyPositionWithDefault extends MyPosition {
    default: string;
}
declare function position(): MyPosition;
declare function position(a: number): MyPositionWithDefault;
declare function position(a: number, b: number): MyPosition;
