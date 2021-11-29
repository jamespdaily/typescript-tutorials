const id = 5;
const company = 'Daily Dump LLC';
const isPublished = true;
const x: any = 'Hello';
let age: number;

const ids: number[] = [1, 2, 3, 4, 5];
const arr: any[] = [1, true, 'Fuck'];

// Tuple
const person: [number, string, boolean] = [1, 'Jim', true];

// Tuple array
let employee: [number, string][];

employee = [
    [1, 'Jim'],
    [2, 'Katie'],
    [3, 'Nora'],
];

// Union
const pid: string | number = 22;

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
const cid: any = 1;
// let customerId = <number>cid;
const customerId = cid as number;

// Functions
function addNum(x, y) {
    return x + y;
}
