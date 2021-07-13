// Selection sorting

class Sorter {
    constructor(array) {
        this.array = array;
        this.count = 0;
        this.sortingMethod();
    }

    sortingMethod() {
        for (let j = 0; j < this.array.length-1; j++) {
            let iMin = j;

            for (let i = j + 1; i < this.array.length; i++) {
                this.count += 1;
                if (this.array[i] < this.array[iMin]) {
                    iMin = i;
                }
            }
            if (iMin != j) {
                let tmp = this.array[j];
                this.array[j] = this.array[iMin];
                this.array[iMin] = tmp;
            }
        }
    }
}

module.exports = Sorter;