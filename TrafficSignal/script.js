// MPTUKGJ
// KUTUMRJ

// YRGGYRG


var str1 = 'MPTUKGJ'
var str2 = 'KUTUMRJ'
var outPut = ''
var flag;


for(var i = 0; i < str1.length; i++){
    if(str1.charAt(i) == str2.charAt(i)){
         outPut += 'G'
    }
    else{
        var j = 0;
        flag = false;
        while(j < str2.length){
            if(str1.charAt(i) == str2.charAt(j)){
                outPut += 'Y'
                flag = true
                break;
            }
            j++;
        }
        if(flag == false){
            outPut += 'R';
        }
    }
}
console.log(outPut);