let i,j,temp
const a = [1,10,5,8,7,6,4,3,2,9]
const length = a.length

for(i=0; i<length; i++) {
    for (j=i; j<length; j++) {
        if(a[i] > a[j]) {
            temp = a[i]
            a[i] = a[j]
            a[j] = temp
        }
    }
}

console.log(a)