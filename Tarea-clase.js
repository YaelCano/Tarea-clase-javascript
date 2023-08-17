//---------------------------
//Tarea en clase 
//---------------------------

let array = [2,3,4,5,7,8];

function num(array, objectivo) {
    elements = [];
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array.length; k++) {
            if (array[i] + array[k] == objectivo){
                elment = [array[i], array[k]];
                elements.push(elment);
            }
            
        }
        
    }
    return elements;
}
console.log(num(array, 10));
//Desarrollado por: Yael Mauricio Cano Palacio