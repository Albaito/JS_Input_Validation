
 function isPresent(value, name){
    if (value.length < 1 || value == ''){
        return 'Input missing from ' + name + ' please ensure a value is entered'
    }
    return ''
 }

function isInteger(value, name) {
    if (Number.isInteger(value)){
        return ''
    }
    return name + ' is a non-whole number, please enter only whole numbers for ' + name
}

 function isNumeric(value, name){
    if (isNaN(value)){
        return 'Entered value for ' + name + ' is non-numeric'
    }
    return ''
 }

 function isWithinRange(min, max, value, name){
    if (value < min ){
        return name + ' is smaller than minimum value: ' + min
    }
    else if (value > max){
        return name + ' is larger than maximum value: ' + max
    }
    return ''
 }