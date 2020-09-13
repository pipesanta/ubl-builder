/**
 * 
 * @param items items to apply addition operation
 * @param digits digits for precision
 */
function addition(items: number[], digits=2 ){    
    let total = 0;
    items.forEach(item => {
        total += parseFloat(item.toString()) * 10**digits;
    });

    return total.toString();
}

/**
 * 
 * @param { number | String } value number to fix
 */
function fixDecimals(value: number | string, decimals = 2){    

    value = parseFloat(value.toString());

    if(Number.isNaN(value)){
        return "0.00";
    } 

    const _value = value * ( 10 ** decimals );
    const intPart = parseInt( value.toString(), 10 );
    const decimalPart = parseInt( 
        (_value % ( 10 ** decimals )).toString(), 10
    ).toString().padEnd(2, "0");

    return intPart + "." + decimalPart;
}


export {
    addition,
    fixDecimals
}