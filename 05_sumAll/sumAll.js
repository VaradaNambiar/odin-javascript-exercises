const sumAll = function(a, b) {
    let sum =0
    console.log(typeof(a))
    console.log(typeof(b))
    if(a<0 || b<0)
        return 'ERROR'
    else if (typeof(a)!= "number" || typeof(b)!="number")
        return 'ERROR'
    else
    {
        let smaller = (a<b? a : b)
        let bigger = (a>b? a: b)
        for(let number = smaller; number<=bigger; number++){
            sum+=number
        }
        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
