var mergeSort = function(array) {
// 반으로 쪼갠 후 정렬한 후 합치는 재귀함수 부분
    if (array.length < 2) return array; 
    // 원소가 하나짜리 array는 그대로 array를 return
    var pivot = Math.floor(array.length / 2); 
    // 대략 반으로 쪼개는 코드
    var left = array.slice(0, pivot); 
    // 쪼갠 후 왼쪽 array
    var right = array.slice(pivot, array.length); 
    // 쪼갠 후 오른쪽 array
    return merge(mergeSort(left), mergeSort(right)); 
    // 재귀적으로 쪼개고 합칩니다.
}
    
function merge(left, right) {
// left, right array의 맨 앞 숫자를 비교하고 작은 값을 result로 return
    var result = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]) { 
        // 두 배열의 첫 원소를 비교하여
        result.push(left.shift()); 
        // 더 작은 수를 결과에 넣어줍니다.
    } else {
        result.push(right.shift()); 
        // 오른쪽도 마찬가지
        }
    }
    while (left.length) result.push(left.shift()); 
    // 어느 한 배열이 더 많이 남았다면 나머지를 다 넣어줍니다.
    while (right.length) result.push(right.shift()); 
    // 오른쪽도 마찬가지
    return result;
};

const array = [5,2,4,7,6,1,3,8]

console.log(mergeSort(array))