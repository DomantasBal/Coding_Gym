/////////////////////////////////////
//            Promises             //
////////////////////////////////////

let p = new Promise ((resolve, reject) => {
    let check = 1;

    if (check === 1){
        resolve("YES")
    }else{
        reject("NO");
    }
})