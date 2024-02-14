
// string 3 vabe lekha jai

const country = 'bangladesh' ; 
const division = "khulna";
const district = `satkhira`;
 const thana = new string ('demra');// onno rokom string

//---------------
const numbers =[ 54, 33, 22, 11, 12, 23, 21, 43];
// console.log(numbers);
// console.log(numbers.length);
// console.log (numbers[2]);
numbers[1] = 99;
// console.log (numbers);

//string is immutable , change kora jai na
// array is mutable , array change kora jai.

const capital = 'dhaka';
// console.log (capital.length);
// console.log(capital[1]);
const address= '     anDoRkillal    ';


address.toLowerCase() //lrka cto hik thik korar jnno
address.trim() //gap probln thik kore
const part = address.slice(2,5);
// console.log(part);

const sentence= 'i am a good & hardworking person';
// console.log(sentence.split(' '));  //faka dawar jnno
// console.log(sentence.split('a'));


const friendStr= 'rahim, karim, dahim, lahim, fahim, sahim'; 

const friends = friendStr.split(','); 

const realFriend= ['rahim', 'karim', 'dahim', 'lahim', 'fahim', 'sahim']; 
// console.log(realFriend);
// console.log(realFriend.join()); //2 ta vag kore maje kicho kicho dawa
// console.log(realFriend.join('-')); 
// console.log(realFriend.join('|'));


//-----------concat------------ 2ta name ke 1sate korar jnno

const first='adbid';
const last ='nabid';
const fullName= first+' '+ last; // aksatekora and maje faka dawa
// console.log(fullName);

//    others way concat

const firstName = 'abdul';
const middleName ='wahid';
const lastName = 'nabil';
const fullName1 = firstName.concat(' ') + middleName.concat(' ') + lastName.concat();
// console.log(fullName1);

// -----includes-----
// console.log(lastName.includes('b')); //true mne achi ay word ta
 // console.log(lastName.includes('x'));//false mne nai ay word ta

// ----------reverse js-------------ulte dawa mane last tke suro hobe

  let reverse ='' // mt string mane khali kicho na daw 
const sentences= 'i am learning web dev.';
for(const letter of sentences){
   // console.log(letter); // lekha gulo ak ak kore asbe
    reverse= letter + reverse; // sob lekha ulte glo
}
// console.log(reverse);

// same kaj reverse----kinto for dea
let rev='';
for (let i=0; i<sentences.length; i++ ){
   // console.log(sentences[i]);
    const letter =sentences[i];
    rev = letter+rev;
}
//console.log(rev);

// shortcut reverse

const reversed = sentences.split('').reverse().join('');
// console.log(reversed);

//------------------------------------------------------

// object

const person={ //object
    name: 'sodor uddin', // proparty---proprtyvalue
    age:25,
    professonal:'developer',
    salary: 25000,
    married:true,
    place: 'satkhira',
    'fev places' :['bndorbon', 'pbna', 'isamoti']
}
// console.log(person);
// console.log(person.professonal);
const income= person.salary; //proparti ke varavle a o rakha jai.
 //console.log(income);


// object ke onak vbe babhor kora jai... others vbe use object

// console.log(person['age']);
// console.log(person['fev places']);

// object ar moddhe kicho change korsr projon hole (koiak rokon vbe kora jai)----
person.salary=30000;
person['age']=26;
person['fev places']=['mldiv','pals'];
const propName='profession';
person[propName]= 'devops';


// console.log(person); //change ans








