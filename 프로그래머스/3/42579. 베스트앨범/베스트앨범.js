function solution(genres, plays) {
    const genresObj = {};
    const solutions = [];
    
    genres.forEach((genre, idx) => {
        if (!genresObj[genre]) {
            genresObj[genre] = {
                allPlays: 0,
                bests: [],
            };
        }
        
        genresObj[genre].allPlays += plays[idx];
        
        genresObj[genre].bests.push({ idx, plays: plays[idx] });        
    });
    
    Object.values(genresObj).forEach((obj) => {
        obj.bests.sort((
            {idx: idx1, plays: plays1}, {idx: idx2, plays: plays2}
        ) => {            
            if (plays1 === plays2) {
                return idx1 - idx2;
            }
            
            return plays2 - plays1;
        })
    })
    
    const popularityGenres = Object.entries(genresObj).sort(([, a], [, b]) => {
        return b.allPlays - a.allPlays;
    })

    popularityGenres.forEach((popularityGenre) => {
        solutions.push(...genresObj[popularityGenre[0]].bests.map(({idx, plays}) => idx).slice(0, 2));
    })
    
    return solutions;
}