function solution(wallpaper) {
    const [maxY, maxX] = [wallpaper.length - 1, wallpaper[0].length - 1];
    
    let firstFileIndex;
    let lastFileIndex;
    
    for (let i = 0; i < wallpaper.length; i++) {
        if (wallpaper[i].indexOf('#') >= 0) {
            firstFileIndex = i;
            
            break;
        }
    }
    
    for (let i = maxY; i >= 0; i--) {
        if (wallpaper[i].indexOf('#') >= 0) {
            lastFileIndex = i + 1;
            
            break;
        }
    }
    
    const fileIndexSet = new Set();
    
    wallpaper.forEach((el) => {
        for (i = 0; i <= maxX; i++) {
            if (el[i] === '#') {
                fileIndexSet.add(i);
            }
        }
    });
    
    const [minIndex, maxIndex] = [
        Math.min(...fileIndexSet),
        Math.max(...fileIndexSet) + 1
    ];
    
    return [firstFileIndex, minIndex, lastFileIndex, maxIndex];
}