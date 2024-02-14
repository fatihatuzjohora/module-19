const computer ={
    brand: 'lenova',
    price:35000,
    processor: 'intel',
    hdd: '512gb',
    monitor:'hp',
}
const keys = Object.keys(computer);
console.log(keys) // computer ar proparti gulo ke output dba

const values = Object.values(computer);
console.log(values) //// computer ar values  gulo ke output dba

// nested 

const college={
    name: 'vnc',
    class: ['11', '12'],
    event: ['fair', '21 feb'],
    unique:{
        color: 'blue',
    
        result:{
            merit:'good',
            gppa: '5,00',
        }
    }

}
console.log(college.name);
console.log(college.unique.color);
// change korte chaile
college.unique.result.merit='top top' ; //change hocce
console.log(college.unique.result.merit);
college.event[1]='16 dec'; //change hocce
console.log(college.event);
delete college.class; // delete korte cail
console.log(college);


//---------------loop----for--in----------------------
// for of: array te bbhor kori
// for in: object te bbhor kori
const mobile={
    brand :'samsung',
    price:25000,
    color:'black',
    camera:'12mp',
    inNew: true,
}

for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}

//onno vabe keys babhor kore 
const somes =Object.keys(mobile);
console.log(somes);
for (const some of somes){
    console.log(some, ':', mobile[some]);
}
