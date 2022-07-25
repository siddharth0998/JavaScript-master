var data = [
    {
        firstName: "siddharth",
        lastName: "patel",
        address: {
            city: "vadodara",
            state: "gujarat",
        }
    },
    
    {
        firstName: "rohan",
        lastName: "shah",
        address: {
            city: "rajkot",
            state: "gujarat",
        }
    },
    {
        firstName: "rohan",
        lastName: "agraval",
        address: {
            city: "rajkot",
            state: "gujarat",
        }
    },
    {
        firstName: "parth",
        lastName: "patel",
        address: {
            city: "banglore",
            state: "karnataka",
        }
    },
    {
        firstName: "siddharth",
        lastName: "patel",
        address: {
            city: "vadodara",
            state: "gujarat",
        }
    },
]

// for(let i =0 ; i < data.length; i++){

//     if(data[i].firstName == data[i+1].firstName)
// }
data = data.filter((value, index, self) =>
    index === self.findIndex((t) => (
        t.firstName === value.firstName && t.lastName === value.lastName && t.address.city === value.address.city && t.address.state === value.address.state
    ))
)

var d = data.sort(function (a, b) {

    if (a.firstName != b.firstName) {
        if (a.firstName > b.firstName) {
            return 1;
        }
        else {
            return -1;
        }
    }
    else{
        if(a.lastName > b.lastName){
            return -1;
        }
        else{
            return 1;
        }
    }
})
console.log(data);

