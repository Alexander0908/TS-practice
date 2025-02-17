interface User {
    login: string;
    password: string;
    age: number;
    addr: string | undefined;
    parents?: {
        mother?: string;
        father?: string;
    }
}

const user: User = {
    login: "first",
    password: "qwerty",
    age: 25,
    addr: "sdfsdf",
}

const dbName = '12345';

function sendUserData(obj: User, db?: string): void {
    console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase());
}