/**
 * 
 * @param {*} value the value of the variable
 * @param {*} name the name of the input as a string
 * @returns an empty '' string if variable is present | Formatted error with the name value
 */
 function isPresent(value, name){
    if (value.length < 1 || value == ''){
        return 'Input missing for ' + name + ' please ensure a value is entered'
    }
    return ''
 }
/**
 * 
 * @param {*} value the value of the variable
 * @param {*} name string containing name of the variable
 * @returns either string of '' | Formatted error with name value
 */
function isInteger(value, name) {
    if (Number.isInteger(value)){
        return ''
    }
    return name + ' is a non-whole number, please enter only whole numbers for ' + name
}
/**
 * 
 * @param {*} value the value of the variable
 * @param {*} name string that'll be used if variable fails the check
 * @returns Either string of '' | Formatted error using the name string
 */
 function isNumeric(value, name){
    if (isNaN(value)){
        return 'Entered value for ' + name + ' is non-numeric'
    }
    return ''
 }
/**
 * 
 * @param {*} min Minimum value
 * @param {*} max Maximum value
 * @param {*} value The variable that'll be checked
 * @param {*} name String of the name that'll be returned if value fails the check
 * @returns 
 */
 function isWithinRange(min, max, value, name){
    if (value < min ){
        return name + ' is smaller than the minimum value: ' + min
    }
    else if (value > max){
        return name + ' is larger than the maximum value: ' + max
    }
    return ''
 }

