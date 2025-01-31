var isBirthdayData = true;
var ageData = 40;
var userNameData = "John";
var userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: "John",
    messages: {
        error: "Error",
    },
};
var userDataTuple = [
    true,
    40,
    "John",
    "Alex",
    "Anna",
];
// userDataTuple[0] = true;
var bthd = userDataTuple[0], age = userDataTuple[1], userName = userDataTuple[2];
var createError = function (msg) {
    throw new Error(msg);
};
function logBrtMsg(_a) {
    var isBirthdayData = _a.isBirthdayData, userNameData = _a.userNameData, ageData = _a.ageData, error = _a.messages.error;
    if (isBirthdayData) {
        return "Congrats ".concat(userNameData.toUpperCase(), ", age: ").concat(ageData + 1);
    }
    else {
        return createError(error);
    }
}
console.log(logBrtMsg(userData));
var departments = ["dev", "design", "marketing"];
var report = departments
    .filter(function (d) { return d !== "dev"; })
    .map(function (d) { return "".concat(d, " - done"); });
var nums = [
    [1, 2, 3],
    [1, 2, 3],
];
////////////////////////
var message = 5;
var messages = ["a", "b"];
// function printMsg(msg: string | number | boolean):void {
//   if (typeof msg === "string" || typeof msg === "number") {
//     console.log(msg.toString());
//   } else {
//     console.log(msg);
//   }
// }
function printMsg(msg) {
    if (Array.isArray(msg)) {
        msg.forEach(function (m) { return console.log(m); });
    }
    else if (typeof msg === "number") {
        console.log(msg.toFixed());
    }
    else {
        console.log(msg);
    }
}
printMsg(4);
var printReadings = function (a, b) {
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
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.getDate());
    }
    else {
        console.log(x.trim());
    }
}
/////////////////////////////////
var msg = "Hello";
msg = "Hello";
var serverConfig = {
    protocol: "http",
    port: 3001,
};
var startServer = function (protocol, port) {
    console.log("Server started on ".concat(protocol, "://server:").concat(port));
    return "Server started";
};
startServer(serverConfig.protocol, serverConfig.port);
// Literal types
function createAnimation(id, animName, timingFunc, duration, iterCount) {
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    // if (elem) {
    console.log("".concat(animName, " ").concat(timingFunc, " ").concat(duration, " ").concat(iterCount));
    //   elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
    // }
}
createAnimation("id", "fade", "ease-in", 5, "infinite");
