// binarySearch implementation
// note: arr must be sorted!
function binarySearch(arr, val) {

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
      // middleVal is too small, look at the right half
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      // middleVal is too large, look at the left half
      rightIdx = middleIdx - 1;
    } else {
      // we found our value!
      return middleIdx;
    }
  }
  
  // left and right pointers crossed, val isn't in arr
  return -1;
}


function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
	if (arr[leftIdx] === 0){
		return arr.length;
	}
	else if (arr[rightIdx] === 0){
  	while (rightIdx !== leftIdx+1) {
    	let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    	let middleVal = arr[middleIdx];

    	if (middleVal === 1) {
    	  leftIdx = middleIdx;
    	} else if (middleVal === 0) {
    	  rightIdx = middleIdx;
    	} else {
    	  return middleIdx;
    	}
  	}
		return arr.length - rightIdx;
	}
  else return 0;
}


function sortedFrequency(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      rightIdx = middleIdx - 1;
    } else {
			leftIdx = findEdge(arr, val, leftIdx, middleIdx, "left")
			rightIdx = findEdge(arr, val, middleIdx, rightIdx, "right")
			
      return rightIdx - leftIdx + 1;
    }
  }
  return -1;
}

function findEdge(arr, val, leftIdx, rightIdx, side) {
	while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

		if (side === "left"){
    	if (middleVal === val && arr[middleIdx - 1] !== val){
    	  return middleIdx;
    	} else if (middleVal === val){
				rightIdx = middleIdx - 1;
			} else {
				leftIdx = middleIdx + 1;
			}
		}
		else {
			if (middleVal === val && arr[middleIdx + 1] !== val){
    	  return middleIdx;
    	} else if (middleVal === val){
				leftIdx = middleIdx + 1;
			} else {
				rightIdx = middleIdx - 1;
			}
		}
  }
}


function findRotatedIndex(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
	let firstVal = arr[0];

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

		if (val >= firstVal) {
			if (middleVal >= firstVal) {
				if (val < middleVal) {
					rightIdx = middleIdx - 1;
				} else if (val > middleVal) {
					leftIdx = middleIdx + 1;
				} else {
					return middleIdx;
				}
			} else {
				rightIdx = middleIdx - 1;
			}
		}
		else if (middleVal < firstVal) {
			if (val < middleVal) {
				rightIdx = middleIdx - 1;
			} else if (val > middleVal) {
				leftIdx = middleIdx + 1;
			} else {
				return middleIdx;
			}
		}
		else leftIdx = middleIdx + 1;
	}
	return -1;
}


function findRotationCount(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
	let firstVal = arr[0];

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

		if (middleVal <= firstVal) {
			if (arr[middleIdx - 1] < middleVal) {
				rightIdx = middleIdx - 1
			}
			else if ((arr[middleIdx + 1] < middleVal)) {
				return middleIdx + 1
			}
			else {
				return middleIdx
			}
		}
		else {
			leftIdx = middleIdx + 1;
		}
	}
	return 0;
}


function findFloor(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
			if (!(arr[middleIdx + 1] <= val)) {
				return middleVal;
			}
			else {
      	leftIdx = middleIdx + 1;
			}
    } else if (middleVal > val) {
      rightIdx = middleIdx - 1;
    } else {
      return middleVal;
    }
  }
  return -1;
}