function solution(code) {
    let mode = 0;
    const ret = [];
    scode = code.split("");
    for (let i = 0; i < scode.length; i++) {
        if (mode === 0 && scode[i] !== "1" && i % 2 === 0) {
            ret.push(scode[i]);
        } else if (mode === 0 && scode[i] === "1") {
            mode = 1;
        } else if (mode === 1 && scode[i] !== '1' && i % 2 === 1) {
            ret.push(scode[i]);
        } else if (mode === 1 && scode[i] === '1') {
            mode = 0;
        }
    }
    if (ret.length === 0) {
        return "EMPTY";
    } else {
        return ret.join("");
    }
}