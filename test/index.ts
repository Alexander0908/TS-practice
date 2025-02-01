const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: "John",
  messages: {
    error: "Error",
  },
};

const userDataTuple: [boolean, number, string, ...string[]] = [
  true,
  40,
  "John",
  "Alex",
  "Anna",
];
// userDataTuple[0] = true;

const [bthd, age, userName] = userDataTuple;

const createError = (msg: string) => {
  throw new Error(msg);
};

function logBrtMsg({
  isBirthdayData,
  userNameData,
  ageData,
  messages: { error },
}: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
  messages: { error: string };
}): string {
  if (isBirthdayData) {
    return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
  } else {
    return createError(error);
  }
}

console.log(logBrtMsg(userData));

const departments: string[] = ["dev", "design", "marketing"];

const report = departments
  .filter((d: string) => d !== "dev")
  .map((d: string) => `${d} - done`);

const nums: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
];

////////////////////////

const message: string | number = 5;
const messages: string[] | number[] = ["a", "b"];

// function printMsg(msg: string | number | boolean):void {
//   if (typeof msg === "string" || typeof msg === "number") {
//     console.log(msg.toString());
//   } else {
//     console.log(msg);
//   }
// }

function printMsg(msg: string[] | number | boolean): void {
  if (Array.isArray(msg)) {
    msg.forEach((m) => console.log(m));
  } else if (typeof msg === "number") {
    console.log(msg.toFixed());
  } else {
    console.log(msg);
  }
}

printMsg(4);

const printReadings = (a: number | string, b: number | boolean) => {
  if (a === b) {
    console.log(a, b);
  }
};

// const checkReadings (readings: {system: number} | {user: number}): void => {
//   if ("system" in readings) {
//     console.log(readings.system);
//   } else {
//     console.log(readings.user);
//   }
// }

function logValue(x: string | Date) {
  if (x instanceof Date) {
    console.log(x.getDate());
  } else {
    console.log(x.trim());
  }
}

/////////////////////////////////

let msg: "Hello" = "Hello";
msg = "Hello";

type Config = {protocol: "http" | "https"; port: 3000 | 3001};
type Role = {
  role: string;
};
type ConfigWithRole = Config & Role;

const serverConfig: ConfigWithRole = {
  protocol: "https",
  port: 3001,
  role: 'admin'
};

const backupConfig: ConfigWithRole = {
  protocol: "http",
  port: 3000,
  role: 'sysadmin'
}

type StartFunction = (protocol: "http" | "https", port: 3000 | 3001) => string;

const startServer: StartFunction = (
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server started" => {
  console.log(`Server started on ${protocol}://server:${port}`);

  return "Server started";
}

startServer(serverConfig.protocol, serverConfig.port);

type AnimationTimingFunc = "ease" | "ease-in" | "ease-out";
type AnimationID = string | number;

// Literal types
function createAnimation(
  id: AnimationID,
  animName: string,
  timingFunc: AnimationTimingFunc,
  duration: number,
  iterCount: "infinite" | number
): void {
  // const elem = document.querySelector(`#${id}`) as HTMLElement;

  // if (elem) {
  console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
  //   elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
  // }
}

createAnimation("id", "fade", "ease-in", 5, "infinite");
