const TOP = 'Top';
const RIGHT = 'Right';

// перечисление
enum Directions { 
    TOP,
    RIGHT,
    LEFT,
    BOTTOM
}

const enum TimingFunc {
    EASE = 'ease',
    EASE_IN = 'ease-in',
    LINEAR = 'linear',
}

const enum TimingFuncN {
    EASE = 1,
    EASE_IN = 2,
    LINEAR = EASE * 2,
}

function frame (elem: string, dir: Directions, tFunc: TimingFunc): void {
    if (dir === Directions.RIGHT) {
        console.log(tFunc);
    }
}

frame('id', Directions.RIGHT, TimingFunc.LINEAR);


/// 'unkown' theory and practice
// let smth: unknown;

// smth = 'str';

// let data: string[] = smth;
// data.find(e => e);

// const someValue: unknown = 10;
// someValue.method();

function fetchData(data: any): void {
    if (typeof data === 'string') {
        console.log(data.toLowerCase())
    } 
    data.method()
}

const userData = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';

function safeParse (s: string): unknown {
    return JSON.parse(s);
}

const data = safeParse(userData);

function transferData(d: unknown): void {
    if (typeof d === 'string') {
        console.log(d.toLowerCase());
    } else if (typeof d === 'object' && d) {
        console.log(data)
    } else {
        console.error('Some error'); 
    }
}

transferData(data);

type T0 = any | unknown;    // any
type T1 = number | unknown; // unknown
type T2 = any & unknown;    // any
type T3 = number & unknown; // number