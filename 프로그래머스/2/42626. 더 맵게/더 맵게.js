class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        return this.heap[0];
    }

    push(value) {
        this.heap.push(value);
        this.#bubbleUp();
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        const min = this.heap[0];
        const last = this.heap.pop();

        if (!this.isEmpty()) {
            this.heap[0] = last;
            this.#bubbleDown();
        }

        return min;
    }

    #bubbleUp() {
        let idx = this.heap.length - 1;

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);

            if (this.heap[idx] >= this.heap[parentIdx]) {
                break;
            }

            this.#swap(idx, parentIdx);
            idx = parentIdx;
        }
    }

    #bubbleDown() {
        let idx = 0;
        const n = this.heap.length;

        while (true) {
            const left = idx * 2 + 1;
            const right = idx * 2 + 2;
            let smallest = idx;

        
            if (left < n && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < n && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === idx) {
                break;
            }

        this.#swap(idx, smallest);
        idx = smallest;
        }
    }

    #swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

function solution(scoville, K) {
    let answer = 0;
    
    const minHeap = new MinHeap();
    
    scoville.forEach((el) => minHeap.push(el));
    
    let minScoville = minHeap.peek();
    
    while (minScoville < K && minHeap.size() > 1) {
        const scoville1 = minHeap.pop();
        const scoville2 = minHeap.pop();

        minHeap.push(scoville1 + scoville2 * 2);
        
        answer++;
        minScoville = minHeap.peek();
    }
    
    return minScoville < K ? -1 : answer;
}