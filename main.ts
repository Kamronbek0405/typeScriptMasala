

/*
//1. son tub yoki tubmasligini aniqlash

function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}


const number = 13;
console.log(`${number} ${isPrime(number) ? 'tub son' : 'tub son emas'}`);
*/



//-----------------------------------------------------------------------------------



/*
//2. users nomli arrey bor shuni ichidagi userlarni id si tub bo'lgan objectlarni yangi arreyga qo'shish
function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}


type objType = {
    
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: number,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  },
 

}


const users:objType[] = [
{
"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"address": {
  "street": "Kulas Light",
  "suite": "Apt. 556",
  "city": "Gwenborough",
  "zipcode": "92998-3874",
  "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
  }
},
"phone": 1-770-736-8031,
"website": "hildegard.org",
"company": {
  "name": "Romaguera-Crona",
  "catchPhrase": "Multi-layered client-server neural-net",
  "bs": "harness real-time e-markets"
}
},
{
"id": 2,
"name": "Ervin Howell",
"username": "Antonette",
"email": "Shanna@melissa.tv",
"address": {
  "street": "Victor Plains",
  "suite": "Suite 879",
  "city": "Wisokyburgh",
  "zipcode": "90566-7771",
  "geo": {
    "lat": "-43.9509",
    "lng": "-34.4618"
  }
},
"phone": 1-770-736-8031,
"website": "anastasia.net",
"company": {
  "name": "Deckow-Crist",
  "catchPhrase": "Proactive didactic contingency",
  "bs": "synergize scalable supply-chains"
}
},
{
"id": 3,
"name": "Clementine Bauch",
"username": "Samantha",
"email": "Nathan@yesenia.net",
"address": {
  "street": "Douglas Extension",
  "suite": "Suite 847",
  "city": "McKenziehaven",
  "zipcode": "59590-4157",
  "geo": {
    "lat": "-68.6102",
    "lng": "-47.0653"
  }
},
"phone": 1-770-736-8031,
"website": "ramiro.info",
"company": {
  "name": "Romaguera-Jacobson",
  "catchPhrase": "Face to face bifurcated interface",
  "bs": "e-enable strategic applications"
}
},
{
"id": 4,
"name": "Patricia Lebsack",
"username": "Karianne",
"email": "Julianne.OConner@kory.org",
"address": {
  "street": "Hoeger Mall",
  "suite": "Apt. 692",
  "city": "South Elvis",
  "zipcode": "53919-4257",
  "geo": {
    "lat": "29.4572",
    "lng": "-164.2990"
  }
},
"phone":  1-770-736-8031,
"website": "kale.biz",
"company": {
  "name": "Robel-Corkery",
  "catchPhrase": "Multi-tiered zero tolerance productivity",
  "bs": "transition cutting-edge web services"
}
},
{
"id": 5,
"name": "Chelsey Dietrich",
"username": "Kamren",
"email": "Lucio_Hettinger@annie.ca",
"address": {
  "street": "Skiles Walks",
  "suite": "Suite 351",
  "city": "Roscoeview",
  "zipcode": "33263",
  "geo": {
    "lat": "-31.8129",
    "lng": "62.5342"
  }
},
"phone":  1-770-736-8031,
"website": "demarco.info",
"company": {
  "name": "Keebler LLC",
  "catchPhrase": "User-centric fault-tolerant solution",
  "bs": "revolutionize end-to-end systems"
}
},
{
"id": 6,
"name": "Mrs. Dennis Schulist",
"username": "Leopoldo_Corkery",
"email": "Karley_Dach@jasper.info",
"address": {
  "street": "Norberto Crossing",
  "suite": "Apt. 950",
  "city": "South Christy",
  "zipcode": "23505-1337",
  "geo": {
    "lat": "-71.4197",
    "lng": "71.7478"
  }
},
"phone":  1-770-736-8031,
"website": "ola.org",
"company": {
  "name": "Considine-Lockman",
}}
]
const primeUsers = users.filter(user => isPrime(user.id));


console.log(primeUsers );
*/


//------------------------------------------------------------------------------------------



/*
// 3. user larni maoshlarini hissoblab 1 ta user ga biriktirish 
interface User {
    id: number;
    name: string;
    salary: number;
}


const users: User[] = [
    { id: 1, name: "User 1", salary: 1000 },
    { id: 2, name: "User 2", salary: 1500 },
    { id: 3, name: "User 3", salary: 1200 },
    { id: 4, name: "User 4", salary: 1800 },
    { id: 5, name: "User 5", salary: 1600 }
];


const totalSalary = users.reduce((sum:number, user) => sum + user.salary, 0);

if (users.length > 0) {
    users[0].salary += totalSalary;
}

console.log(users);
*/



//-----------------------------------------------------------------------------------------


/*
//4. arrey ichidagi unic sonarni qoldirish
const numbers = [1, 2, 3, 2, 4, 5, 1, 6, 4];


const newArr = [...new Set(numbers)];

console.log(newArr); 
*/


//--------------------------------------------------------------------------------------


/*
//5 arrey ichidagi user nomli objetlarni idlari takrorlanganlarini chiqarib yuborish
interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" },
  { id: 2, name: "User 4" },
  { id: 4, name: "User 5" },
  { id: 1, name: "User 6" }
];

const newArr = [...new Map(users.map(user => [user.id, user])).values()];

console.log(newArr);
*/





