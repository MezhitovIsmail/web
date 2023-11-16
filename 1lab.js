function pow(x,n){
    var x1 = x;
    for (let i = 1; i < n; i = i + 1) {
        x *= x1;
    }
    return x;
}

function gcd(a,b){
    var nod = 0;
    if (a > b)
    {
        var bolsh = a;
    }
    else{
        var bolsh = b;
    }
    for (let i = 1; i <= bolsh; i = i + 1) {
        if ((a % i == 0) && (b % i == 0)){
            nod = i;
        }
    } 
    return nod;
}

function minDigit(x){
    var mindigit = 10;
    while (x > 9)
    {
        if ((x % 10) < mindigit){
            mindigit = x % 10;
        }
        x = parseInt(x/10);
    }

    return mindigit;
}

function pluralizeRecords(n){
    if (n % 10 == 1 && n % 100 != 11) {
        console.log('В результате выполнения запроса было найдено', n, 'запись');
    } 
    else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) 
    {
        console.log('В результате выполнения запроса было найдено', n, 'записи');
    } 
    else 
    {
        console.log('В результате выполнения запроса было найдено', n, 'записей');
    }
}

function fibb(n) {
    var f1 = 1;
    var f2 = 1;
    var fs = 0;
    for (let i = 1; i <= n - 2; i = i + 1) {
        fs = f2 + f1;
        f1 = f2;
        f2 = fs;
    }
    return f2;
}

function bubblesort(arr) {
    for (let i = 0; i < arr.length; i = i + 1) {
        for (let j = 0; j < arr.length - i; j = j + 1) {
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function zadach2(arr) {
    var obj = {};

    for (let i of arr){
        obj[i] = (obj[i] || 0) + 1;
    }
    
    var obj2 = {};

    for (let i in obj){
        if (obj[i] > 1){
            obj2[i] = obj[i];
        }
    }

    return obj2;
}

function zadach3(arr) {
    let maxel = null;
    for (let i of arr){
        let minel = Math.min(i);
        if (maxel == null || maxel < minel) {
            maxel = minel;
        }
    }

    return maxel
}

//console.log(pow(10, 9));
//console.log(gcd(10042, 32874));
//console.log(minDigit(985455));
//console.log(pluralizeRecords(2));
//console.log(fibb(5));
//console.log(bubblesort([1, 3, 8, 3, 9, 4134, 4]));
//console.log(zadach2([1, 1, 2, 2, 1, 5, 8, 8, 4, 4, 4]));
//console.log(zadach3([[1,2],[2,2],[3,3]]));