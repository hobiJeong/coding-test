function solution(friends, gifts) {
    const presentObj = {};
    const receivePresentsCountArr = [];
    
    friends.forEach((friend) => {
        presentObj[friend] = {
            present: {},
            presentIndex: 0,
            receivePresentsCount: 0,
        };
        
        friends.forEach((el) => {
            if (friend === el) {
                return;   
            }
            
            presentObj[friend].present[el] = {
                sendCount: 0,
                isCompared: false
            };
        })
    })
    
    for (const el of gifts) {
        const [sender, receiver] = el.split(' ');
        
        presentObj[sender].present[receiver].sendCount += 1;
        
        presentObj[sender].presentIndex += 1;
        presentObj[receiver].presentIndex -= 1;
    }
    
    friends.forEach((friend) => {
        const currentFriend = presentObj[friend];
        
        friends.forEach((el) => {
            if (friend === el) {
                return;
            }
            
            const comparedFriend = presentObj[el];
            
            if (comparedFriend.present[friend].isCompared) {
                return;
            }
            
            const currentFriendSendCount = currentFriend.present[el].sendCount;
            const comparedFriendSendCount = comparedFriend.present[friend].sendCount;
            
            if (currentFriendSendCount > comparedFriendSendCount) {
                currentFriend.receivePresentsCount += 1;
            } else if (currentFriendSendCount < comparedFriendSendCount) {
                comparedFriend.receivePresentsCount += 1;
            } else {
                if (currentFriend.presentIndex > comparedFriend.presentIndex) {
                    currentFriend.receivePresentsCount += 1;
                } else if (currentFriend.presentIndex < comparedFriend.presentIndex) {
                    comparedFriend.receivePresentsCount += 1;
                } 
            }
            
            currentFriend.present[el].isCompared = true;
            comparedFriend.present[friend].isCompared = true;
        })
    });
    
    for (const key of Object.keys(presentObj)) {
        receivePresentsCountArr.push(presentObj[key].receivePresentsCount);
    }
    
    return Math.max(...receivePresentsCountArr);
}