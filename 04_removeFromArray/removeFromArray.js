const removeFromArray = function(arr, ...to_remove) {
    let answer=arr
    for (let value of to_remove)
    {
            answer = answer.filter((element)=>{
                let is_type_same = typeof(element)==typeof(value)
                let is_value_same = element==value
                // console.log(is_type_same)
                // console.log(is_value_same)
                return ( !(is_type_same && is_value_same))
            })
    }
    return answer
};

// Do not edit below this line
module.exports = removeFromArray;
