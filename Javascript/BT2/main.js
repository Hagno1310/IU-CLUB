function solve() {
    var sum = 0
    var array = prompt("Nhập vào 1 dãy số cách nhau với dấu cách").split(" ");
    array.forEach(element => {
        if (element % 2 == 0) {
            sum += Number(element);
        }
    });
    console.log(sum)
}   

solve()