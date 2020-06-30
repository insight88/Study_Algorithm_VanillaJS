
let size = 0
let sorted = []

function merge(a, m, middle, n) {
    let i = m
    // 왼쪽 array의 첫 인덱스
    let j = middle + 1
    // 오른쪽 array의 첫 인덱스
    let k = m
    // 합쳐진 array의 첫 인덱스
    let t
    // 남은 데이터 처리를 위한 for문에 쓰이는 임의의 인덱스

    while(i <= middle && j <= n) {
        if(a[i] <= a[j]) {
        sorted.push(a[i])
        i++
        } else {
        sorted.push(a[j])
        j++
        }
    }
    // 두 정렬을 작은 것부터 sorted[]에 삽입

    if (i > middle) {
        for (t=j; t <= n; t++) {
        sorted.push(a[t])
        }
        // 왼쪽 array 삽입이 먼저 끝날 때, j~n까지 오른쪽에 남은 데이터 삽입
    } else {
        for (t=i; t <= middle; t++) {
        sorted.push(a[t])
        }
        // 오른쪽 array 삽입이 먼저 끝날 때, i~middle까지 왼쪽에 남은 데이터 삽입
    }
    console.log(sorted)
    return sorted
}

function mergeSort(a, m, n) {
    if (m < n) {
        let middle = (m+n)/2
        mergeSort(a, m, middle)
        mergeSort(a, middle+1, n)
        // m~n까지 array를 반으로 쪼개서 재귀
        merge(a, m, middle, n)
        // 반으로 쪼갠 array를 나열 후 합치기
    }
}

const a = [7,6,2,8,3,5,4,1]
const len = a.length

console.log(mergeSort(a, 0, len))