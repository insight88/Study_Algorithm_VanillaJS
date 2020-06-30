function solution(arr){
  let i, j, temp;
  for (i = 1; i<arr.length; i++) {
    temp = arr[i]; // 새로운 숫자를 선택함
    for (j = i-1; j>=0 && temp<arr[j]; j--) { 
      // 선택한 숫자를 이미 정렬된 숫자들과 비교하며 넣을 위치를 찾는 과정
      // 선택한 숫자가 정렬된 숫자보다 작으면
      arr[j + 1] = arr[j]; // 한 칸씩 뒤로 밀어낸다
    }
    arr[j + 1] = temp; // 마지막 빈 칸에 선택한 숫자를 넣어준다.
  }
  return arr;
};

const array = [1,10,5,8,7,6,4,3,2,9]

console.log(solution(array))

