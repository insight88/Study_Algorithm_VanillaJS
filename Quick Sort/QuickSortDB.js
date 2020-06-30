function quickSort(data, start, end) {
    if (start >= end) {
        return;
    }
    // sort할 데이터가 하나인 경우 그대로 두기

    let pivot = start;
    let i = start + 1
    let j = end
    let temp

    while(i <= j) {
        while(i <= end && data[i] <= data[pivot]) {
            i++
        }
        // pivot값보다 큰 값을 만날 때까지 i=start+1에서 시작해서 i++
        while(j > start && data[j] >= data[pivot]) {
            j--
        }
        // pivot값보다 작은 값을 만날 때까지 j=end에서 시작해서 j--
        if (i > j) {
            temp = data[j]
            data[j] = data[pivot]
            data[pivot] = temp
        // 왼쪽부터 찾은 값의 index와 오른쪽부터 찾은 값의 index가 엇갈릴 때
        } else {
            temp = data[i]
            data[i] = data[j]
            data[j] = temp
        }
        // 왼쪽부터 찾은 값의 index와 오른쪽부터 찾은 값의 index가 엇갈리지 않을 때
    }

    quickSort(data, start, j-1)
    quickSort(data, j+1, end)
    console.log(data)
}

const data = [1,10,5,8,7,6,4,3,2,9]
const start = 0
const number = 10
const end = number-1

quickSort(data, start, end)