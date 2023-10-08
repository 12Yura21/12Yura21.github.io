function showDialogBox() {
    var userResponse = alert("Натисність OK")

    if (userResponse !== null) {
        document.write("Hello, world!");
    }
    else{
        document.write("Ви не натиснули ОК")
    }
}
showDialogBox()