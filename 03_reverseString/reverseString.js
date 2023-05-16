const reverseString = function(str) {

    let iter = 0
    let split_arr = str.split() // splits the words into array

    let result =""
    for(let word of split_arr){
        ++iter
        // let reversed = (word)=>{
        //     let inter = word.split("")      // splits word into array of alphabets
        //     inter.reverse()                 // reverse the alphabets
        //     return (inter.join(""))         // join array into string
        // }

        let reversed = reverseWord(word)
        result+=reversed

        if(iter!=split_arr.length){
            result+=" "
        }
    }
    console.log(result)
    return result
};

function reverseWord(word){
    let inter = word.split("")      // splits word into array of alphabets
    inter.reverse()                 // reverse the alphabets
    return (inter.join(""))         // join array into string
}

// Do not edit below this line
module.exports = reverseString;
