function solution(a, b) {
    let aa = a.toString();
    let bb = b.toString();
    if (aa+bb > bb+aa) {
        return Number(aa+bb);
    } else if (bb+aa > aa+bb) {
        return Number(bb+aa);
    } else {
        return Number(aa+bb);
    }
     
}