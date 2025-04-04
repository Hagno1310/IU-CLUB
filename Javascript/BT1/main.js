function CheckNumber() {
    var n = prompt("Nhập n: ");

    if (isNaN(n) || n === null) {
        console.log("Không phải số hợp lệ");
        return;
    }

    if (n % 2 === 0) {
        console.log(`${n} là số chẵn`);
        return;
    }
    console.log(`${n} là số lẻ`);
}

CheckNumber()