
const convertToDec = bin =>{
    // retorna null se não for uma string de um numero binário
    if (!isABin(bin)){ throw 'not a binary'}
    
    //transforma a string em array e inverte para facilitar os cálculos
    let arrayBin = bin.split('')
    let arrayBinInverted = []
    arrayBin.forEach((letter,index) =>{
        arrayBinInverted[arrayBin.length - index-1] = letter
    })
    // multiplica cada valor por 2^index e soma para encontrar o decimal equivalente
    let dec = 0
    arrayBinInverted.forEach((element,index) => { 
        element == "0" ? 0 : dec = dec+Math.pow(2,index)
    })
    
    return dec
}

const isABin = str => {
    for(let i=0;i < str.length;i++){
        if (str[i] !=1 && str[i] != 0){
            return false
        }
    }
    return true
}

btn = document.getElementById("btn").onclick = event =>{
    event.preventDefault()
    bin = document.getElementById("bin").value
    dec = document.getElementById("dec")
    try{
        result = convertToDec(bin)
        dec.innerHTML = result
        dec.className="valid"

    } catch(error) {
        dec.innerHTML = "Não é um binário válido"
        dec.className="invalid"
    }

}