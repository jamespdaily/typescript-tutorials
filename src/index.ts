let id: number = 5;
let company: string = 'Daily Dump LLC';
let isPublished: boolean = true;
let x: any = 'Hello';
let age: number;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Fuck'];

// Tuple
let person: [number, string, boolean] = [1, 'Jim', true];

// Tuple array
let employee: [number, string][];

employee = [
    [1, 'Jim'],
    [2, 'Katie'],
    [3, 'Nora'],
];

// Union
let pid: string | number = 22;

// Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right,
}

// Objects
type User = {
    id: number;
    name: string;
};

const user: User = {
    id: 1,
    name: 'Jim',
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function addNum(x, y) {
    return x + y;
}
