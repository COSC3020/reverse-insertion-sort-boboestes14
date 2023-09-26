function insertionSortReverse(arr) {
    for(var i = arr.length; i >= 0; i--) {
      var val = arr[i];
      var j;
      for(j = i; j < arr.length && arr[j+1] < val; j++) {
        arr[j] = arr[j+1];
      }
      arr[j] = val;
    }
    return arr;
  }