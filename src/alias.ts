type User = { id: number; name: string; isActive: boolean }

const john:User = {
    id: 1,
    name: 'john',
    isActive: true,
};
const susan:User = {
    id: 1,
    name: 'susan',
    isActive: false,
};
  
function createUser(user: User): User {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  
    return user;
}

console.log(createUser(susan));
console.log(createUser(john));

type StringOrNumber = string | number;

let value: StringOrNumber;
value = 'Hello';
value = 121;
console.log(value);

// type Theme = 'dark' | 'light';

// let theme: Theme;

// theme = 'dark';
// theme = 'light';

// function setTheme(t: Theme) {
//     theme = t;
// }

// const t = "dark"

// console.log(setTheme(t));