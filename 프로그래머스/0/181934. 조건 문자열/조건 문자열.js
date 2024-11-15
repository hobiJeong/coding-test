function solution(ineq, eq, n, m) {
    const iq = ineq+eq;
    const repiq = iq.replace('!','');
    if (repiq == "<" ) {
        if(n < m) {
            return 1;
        } else {
            return 0;
        }
    } else if(repiq == ">") {
        if (n > m) {
            return 1;
        } else {
            return 0;
        } 
    } if (repiq == "<=" ) {
        if(n <= m) {
            return 1;
        } else {
            return 0;
        }
    } if (repiq == ">=" ) {
        if(n >= m) {
            return 1;
        } else {
            return 0;
        }
    }
}