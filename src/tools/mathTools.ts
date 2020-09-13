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
        console.error("IS NAN");
        return "0.00";
    } 

    const _value = value * ( 10 ** decimals );
    const intPart = parseInt( value.toString() );
    const decimalPart = parseInt( 
        (_value % ( 10 ** decimals )).toString() 
    ).toString().padEnd(2, "0");

    return intPart + "." + decimalPart;
}

/**
 * 
 * @param {string} amount amount as string
 */
function roundAmount(amount: string, precision = 4){
    const decimalPrecision = 10 ** precision;
    const amountAsFloat = (parseFloat(amount) * decimalPrecision); // read 4

    const decimals = amountAsFloat % decimalPrecision;


    if(decimals >= 0 && decimals <= 49 ){
        console.log("Mantener el dígito menos significativo");
    }else if (decimals >= 60 && decimals <= 99){
        console.log("Incrementar el dígito menos significativo");
    }else{
        // decimals [50, 59 ]
        const incrementSecondDecimal = decimals % 2 != 0;
        if(incrementSecondDecimal){
           console.log("Incrementar el dígito menos significativo"); 
        }else{
            console.log("Mantener el dígito menos significativo");            
        }
    }

    return amount;
}

export {
    addition,
    fixDecimals
}