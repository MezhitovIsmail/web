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