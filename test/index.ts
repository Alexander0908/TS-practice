const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: "John",
  messages: {
    error: "Error"
  }
};

const userDataTuple: [boolean, number, string, ...string[]] = [true, 40, "John", 'Alex', 'Anna']; 
// userDataTuple[0] = true;

const [bthd, age, userName] = userDataTuple;

const createError = (msg: string) => {
  throw new Error(msg);
};

function logBrtMsg({isBirthdayData, userNameData, ageData, messages: {error}}: {
  isBirthdayData: boolean, 
  userNameData: string, 
  ageData: number,
  messages: {error: string}
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

const nums: number[][] = [[1, 2, 3], [1, 2, 3]];