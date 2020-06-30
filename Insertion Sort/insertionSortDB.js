let i,j,temp
const a = [1,10,5,8,7,6,4,3,2,9]
const length = a.length

for(i=0; i<length; i++) {
    for (j=i; j>=0; j--) {
        if (a[j] > a[j+1]) {
            temp = a[j]
            a[j] = a[j+1]
            a[j+1] = temp
        }
    }
}

console.log(a)