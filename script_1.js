// Bubble sorting

class Sorter {
    constructor(array) {
        this.array = array;
        this.count = 0;
        this.sortMethod();
    }

    sortMethod() {
        let isSorted;
        for (let i = 0; i < this.array.length; i++) {
            isSorted = true;
            for (let j = 1; j < this.array.length; j++) {
                // this.count += 1;
                if(this.array[j] < this.array[j - 1]){
                this.count += 1;
                    let tmp = this.array[j];
                    this.array[j] = this.array[j -1];
                    this.array[j -1] = tmp;
                    isSorted = false;
                }
            }
            if (isSorted){
                return;
            }
        }
    }
}

module.exports = Sorter;