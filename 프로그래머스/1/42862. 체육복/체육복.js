function solution(n, lost, reserve) {
    lost.sort((a, b)=>(a - b));
    reserve.sort((a, b)=>(a - b)); 
    const reallost = lost.filter(los => !reserve.includes(los));
    const realres = reserve.filter(ste => !lost.includes(ste));

    for(i = 0; i < reallost.length; i++) {
        for(j = 0; j < realres.length; j++) {
            if(Math.abs(reallost[i] - realres[j]) === 1) {
            realres.splice(j, 1);
            reallost.splice(i, 1);
            j--;
            console.log(realres);
            console.log(reallost);
        }

            console.log(realres);
            console.log(reallost);
        }  
    }
    return n - reallost.length;
}