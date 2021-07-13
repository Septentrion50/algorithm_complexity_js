// Insertion sorting

class Sorter {
    constructor(array){
        this.array = array;
        this.count = 0;
        this.sortMethod();
    }

    sortMethod() {
        for (let i = 1; i < this.array.length; i++) {
            let currentNum = this.array[i];
            let j = i - 1;
            this.count += 1;
            while (j >= 0 && this.array[j] > currentNum) {
                this.count += 1;
                this.array[j + 1] = this.array[j];
                j--;
            }
            this.array[j + 1] = currentNum;
        }
    }
}

module.exports = Sorter;