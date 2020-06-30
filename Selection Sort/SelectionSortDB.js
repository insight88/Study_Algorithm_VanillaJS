function solution(arr){
    let i, j, temp, index

    for (let i=0; i<arr.length; i++) {
        let min = 11
        for (let j=i; j<arr.length; j++) {
            if (min > arr[j]) {
                min = arr[j]
                index = j
            }
            // 한 사이클 돌며 가장 작은 숫자의 값 min, 그 값의 위치 index = j를 저장
        }
        temp = arr[i]
        arr[i] = arr[index]
        arr[index] = temp
        // 값 스와핑 : arr[i]의 값과 arr[index]의 값을 arr 변수를 매개로 서로 바꿈
    }
    return arr
}

const array = [1,10,5,8,7,6,4,3,2,9]

console.log(solution(array))

