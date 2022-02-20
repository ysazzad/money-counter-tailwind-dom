function getValue(need) {
    let inputValue = document.getElementById(need + "-value").value
    return inputValue
}
document.getElementById("calculate-btn").addEventListener("click", function () {
    let incomeValue = getValue("income")
    let foodValue = getValue("food")
    let rentValue = getValue("rent")
    let clothesValue = getValue("clothes")
    console.log(incomeValue, foodValue);
    if (isNaN(incomeValue) || isNaN(foodValue) || isNaN(rentValue) || isNaN(clothesValue)) {
        document.getElementById("error-msg").style.display = "inline-block"
        return
    }
    if (incomeValue < 0 || foodValue < 0 || rentValue < 0 || clothesValue < 0) {
        document.getElementById("error-msg").style.display = "inline-block"
        return
    }
    if (incomeValue == '' || foodValue == '' || rentValue == '' || clothesValue == '') {
        document.getElementById("error-msg").style.display = "inline-block"
        return
    }

    let totalExpenses = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothesValue)
    document.getElementById("total-expenses").innerText = totalExpenses
    document.getElementById("balance").innerText = parseInt(incomeValue) - totalExpenses
})
document.getElementById("save-btn").addEventListener("click", function () {
    let saveValue = getValue("save")
    let incomeValue = getValue("income")
    let calculatePercentage = (incomeValue * saveValue) / 100
    // remaining balance 
    let foodValue = getValue("food")
    let rentValue = getValue("rent")
    let clothesValue = getValue("clothes")
    let totalExpenses = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothesValue)
    let totalBalance = parseInt(incomeValue) - totalExpenses
    if (totalBalance < calculatePercentage) {
        document.getElementById("error-msg-2").style.display = "inline-block"
        return
    }
    document.getElementById("saving-amount").innerText = calculatePercentage
    document.getElementById("remaining-amount").innerText = totalBalance - parseInt(calculatePercentage)
})