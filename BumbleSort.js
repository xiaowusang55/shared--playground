function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function BumbleSort(arr) {
  let flag = false;
  let count = 1;
  do {
    flag = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i, i - 1);
        flag = true;
      }
    }
    count++;
  } while (flag)

  console.log('count: ', count)
  console.log('BumbleSort result: ', arr);
}

function SelectionSort(arr) {

}

const arr = [6,8,0,6,7,4,3,1,5,10];

// BumbleSort(arr);
SelectionSort(arr);
