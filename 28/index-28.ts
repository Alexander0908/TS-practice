interface User {
    readonly login: string;
    password: string;
    age: number;
    addr?: string | undefined;
    parents?: {
        mother?: string;
        father?: string;
    }
}

const user: User = {
    login: "first",
    password: "qwerty",
    age: 25,
};

const userFreeze: Readonly<User>= {
    login: "first",
    password: "qwerty",
    age: 25,
}

let dbName: string;
sendUserData(user, 'evevsdf');

console.log(dbName!);

// const dbName = '12345';

function sendUserData(obj: User, db?: string): void {
    dbName = "12345";
    console.log(obj.parents!.father?.toLowerCase(), db?.toLowerCase());
}

const basicPorts: ReadonlyArray<number> = [3000, 3001, 5555];
basicPorts[0] = 5;
basicPorts.push(5);

// кортедж
// const basicPorts: readonly [number, ...string[]] = [3000, '3001', '5555'];
// basicPorts[0] = 5;
// basicPorts.push(5);

