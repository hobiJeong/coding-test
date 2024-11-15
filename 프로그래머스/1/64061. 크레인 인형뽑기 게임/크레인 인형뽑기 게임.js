function solution(board, moves) {
  let basket = [];
  let lostBasket = [];
    
  for (let i = 0; i < moves.length; i++){
    for (let j = 0; j < board.length; j++){
      
     if(board[j][moves[i]-1] > 0){
       basket.unshift(board[j][moves[i]-1]);
       lostBasket.unshift(board[j][moves[i]-1]);
       board[j][moves[i]-1] = 0;
         
       break;
     }      
    }
      if (lostBasket[0] === lostBasket[1]) {
        lostBasket.shift();
        lostBasket.shift();
          
      } 
  }
    
  return basket.length - lostBasket.length;
}