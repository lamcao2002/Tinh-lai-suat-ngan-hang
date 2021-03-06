
function getInterest() {
    let money = Number(document.getElementById("money").value);
    let rate = Number(document.getElementById("rate").value);
    let year = Number(document.getElementById("year").value);

    let interest = money + year * (money * rate / 100);

    document.getElementById("result").innerHTML =
        "Sau " + year + " năm số tiền cả gốc lẫn lãi là: "
        + interest.toFixed(2) + " (triệu đồng)";
}