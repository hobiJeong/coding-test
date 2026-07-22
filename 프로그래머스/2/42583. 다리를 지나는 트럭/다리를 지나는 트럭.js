function solution(bridge_length, weight, truck_weights) {
    let timer = 0;
    
    const trucksOnRoad = [];
    let timersOnRoad = [];
    let weightOnRoad = 0;
    
    while (true) {
        timer++;
        
        timersOnRoad = timersOnRoad.map((timer) => timer + 1);
                
        if (weightOnRoad + truck_weights[0] <= weight) {
            const truckWeight = truck_weights.shift();
            
            trucksOnRoad.push(truckWeight);
            timersOnRoad.push(1);
            weightOnRoad += truckWeight;
        }
        
        if (timersOnRoad[0] === bridge_length) {
            console.log(timer, trucksOnRoad, timersOnRoad);
            
            const truckWeight = trucksOnRoad.shift();
            
            timersOnRoad.shift();
            weightOnRoad -= truckWeight;
        }
        
        if (truck_weights.length === 0 && trucksOnRoad.length === 0) {
            return timer + 1;
        }
    }
}