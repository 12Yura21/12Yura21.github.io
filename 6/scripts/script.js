if (confirm("Натисність 'ОК' або 'Скасувати' ")){
var i=0;
 while(true){
        var Name = prompt("Введіть будь ласка прізвище та ім'я студента " + (i + 1));
        var spaceCount = (Name.match(/ /g) || []).length;
        if (spaceCount !== 1) {
            alert("Прізвище та ім'я повинні містити рівно один пробіл.");
            continue;
        }
        if (!/^[А-Яа-яA-Za-zіІїЇ\s-']+$/.test(Name.split(" ")[1])) {
            alert("Ім'я студента повинно містити тільки букви і не містити цифр або спеціальних символів.");
            continue;
        }
        i++;
        document.write((i) + ". " + Name + "<br>");
 }
}
else(alert("Натиснуто 'Скасувати'"))