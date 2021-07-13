// Quicksort algorithm

class Sorter {
    constructor(array){
        this.array = array;
        this.count = 0;
        this.sortMethod(this.array, 0, this.array.length-1);
    }

    sortMethod(arr, l, r){
        if( l >= r ){
            return;
        }
        const p = this.partition(arr, l, r);

        this.sortMethod(arr, l, p - 1);
        this.sortMethod(arr, p + 1, r);
    }

    partition(arr, l, r){
        const pivot = arr[r];
        let i = l - 1;
        for (let j = l; j < r; j++){
            this.count += 1;
            if (arr[j] < pivot){
                i++;
                this.swap(arr, i, j);
            }
        }
        this.swap(arr, i + 1, r);
        return i + 1;
    }

    swap(arr, i, j){
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}

module.exports = Sorter;