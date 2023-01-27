


function update()  { /**
 * console.log foram feitos para testar se as variaveis tava funcionando */

    let bill = Number(document.getElementById('yourBill').value)
    
    let tipPercent = document.getElementById('tipInput').value ;

    let split = document.getElementById('splitInput').value;
   
    let tipValue = bill * (tipPercent / 100)

    let billTotal = bill + tipValue 

    let billEach = billTotal / split
    
    document.getElementById('tipPercent').innerHTML = tipPercent + "%"
    document.getElementById('tipValue').innerHTML = '$' + tipValue 
    document.getElementById('totalWithTip').innerHTML = '$' + billTotal
    document.getElementById('splitValue').innerHTML = split + " pessoas"
    document.getElementById('billEach').innerHTML = '$' + billTotal / split 
    
    
    
    
    
    
    
    
    
    
    
    
    
    /** teste(Quando necessario)
                            console.log({bill, tipPercent,split});
                            console.log(tipPercent)
                            console.log(billEach)
    */

}