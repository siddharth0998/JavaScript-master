var employes = [
    {firstName: "test", lastName : "patel", city: "pune"},
    {firstName: "samarth", lastName : "shah",city: "Ahemedabad"},
    {firstName: "saurabh", lastName : "sorathyia", city:"Nodia"},
    {firstName: "shreyash", lastName : "jain",city : "vadodara"},
    {firstName: "test", lastName : "patel", city:"vadodara"},
    {firstName: "mukesh", lastName : "jain",city:"test"}

]
//{"shreyash","test"}
// var data = employes.filter(x => x.city == 'vadodara').map(x => x.firstName)

// console.log(data);

// var data = employes.reduce(function(acc,curr){
//       if(curr.city == 'vadodara'){
//           acc.push(curr.firstName)
//       }
//       return acc;
// },[])

// console.log(data);

var data = employes.reduce(function(acc,curr){
         if(acc[curr.city] == null){
             acc[curr.city] = 1;
         }
         else{
             acc[curr.city] = ++acc[curr.city];
         }
         return acc;
},[])

console.log(data);