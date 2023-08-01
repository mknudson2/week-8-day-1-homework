/*
Question #1

Create a type to represent the following instances of `CTStudent` Also declare three 3 students below as type `CTStudent` and set their values  */
type CTStudent={
    id:string,
    name: string,
    age: number,
    isTired: boolean,
    projectsCompleted: string[],
    pet?:string
}

let student1:CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student2:CTStudent= {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

let student3:CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
} 

//====================================================================================
//====================================================================================

/* 
Question #2

Write a function that will accept a an object of type `Fruit`, the object of type Fruit could also be `null`.  
If there is a Fruit print the color of the fruit, otherwise print `You ate my fruit already` 
be sure to annoate the return type of the function  */

type Fruit={
    color:string,
    shape:string
  }
  
  let apple:Fruit={color:"red", shape:"sphere"}
  let eaten:Fruit|null=null
  

function FruitInfo(fruit: Fruit|null):string{
    if(fruit !== null){
        return fruit.color
    } else {
        return "You ate my fruit already"
    }
}

console.log(FruitInfo(apple)) //red
console.log(FruitInfo(eaten)) //you ate my fruit already

//====================================================================================
//====================================================================================

/* 
Question #3

Create a Union Type named `Ebook` for `Book` and `DigitalBook` and create one instance of the new union type */
type Book={
    isbn:string,
    title:string,
    author:string
  }
  
  type DigitalBook={
    fileType:string,
  }

type Ebook = Book & DigitalBook

let njála:Ebook={
    isbn:"1016246366",
    title:"Brennu-Njáls saga",
    author:"Finnur Jónsson",
    fileType:"ePub"
}

console.log(njála)

//====================================================================================
//====================================================================================
/* 
Question #4

Create a Type to represent a `ShopItem` that will fit the following rules. You may need to create additional structures

- All ShopItems have an numeric id that can not be edited 
- All ShopItems have a price
- All ShopItems have a description
- Some ShopItems have a color
- All ShopItems have a Category represented with an enum 
    - Possible Categories are `Shirts` `Shoes` `Pants` `Hats`
- All ShopItems have a list of keywords used to help search for the ShopItem 
    - For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]

After Creating the `ShopItem` type create 3 items using this type */

enum Model {
    racing = "Madone",
    endurance = "Domane",
    climbing = "Émonda",
    tri = "Speed Concept"
}

type ShopItem={
    readonly id:number,
    price:number,
    description:string,
    color?:string,
    model:Model,
    disc:boolean,
    eTap: boolean,
    keywords:string[]
}

let bike1:ShopItem ={
    id:1,
    price:7599.99,
    description:"The next generation of racing, with a geometry built for speed and control without sacrificing comfort.",
    color:"white with quicksilver",
    model:Model.racing,
    disc:true,
    eTap: true,
    keywords: ["Trek", "Race", "Madone", "Sprinting", "Aero"]
}

let bike2:ShopItem ={
    id:2,
    price:14999.99,
    description:"The standard in Triathalon and Time Trial riding.",
    color:"black and green",
    model:Model.tri,
    disc:true,
    eTap: true,
    keywords: ["Trek", "Triatholon", "Speed", "Time Trial", "Aero", "Aero bars"]
}

let bike3:ShopItem ={
    id:3,
    price:8999.99,
    description:"Crazy light, crazy fast. Float up even the steepest hills without feea of being weighed down.",
    color:"bluedark with blue",
    model:Model.climbing,
    disc:false,
    eTap: true,
    keywords: ["Trek", "Hills", "Climbing", "Lighweight"]
}

let bike4:ShopItem ={
    id:4,
    price:5699.99,
    description:"The bike that makes every road better. From casual riding to ultra-endurance, the Domane will take you there.",
    color:"green-0",
    model:Model.endurance,
    disc:true,
    eTap: false,
    keywords: ["Trek", "Endurance", "Smooth", "All-around", "Relaxed"]
}


console.table(bike1)
console.table(bike2)
console.table(bike3)
console.table(bike4)