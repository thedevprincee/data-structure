const structuralCheck = (set1, set2) =>{
    let count = 0
    let match = []

    for(let i=0; i<set1.length; i++){
        for(let j=0; j<set2.length; j++){
            if(set1[i] === set2[j]){
                match.push(set1[i])
                count++
            }
        }
    }
    let multi = 0
    for(let k=0; k<match.length; k++){
       multi += match[k] * count      
    }
    console.log(`match: ${match}`)
    console.log(`count: ${count}`)
    console.log(`multi: ${multi}`)
}


let arr1 = [12, 13, 6, 4, 8, 56, 10, 1]
let arr2 = [13, 10, 16, 15, 8, 4, 7, 1]
structuralCheck(arr1, arr2)