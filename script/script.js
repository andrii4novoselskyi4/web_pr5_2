function getWeekDay(date) {
    let days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}

let date = new Date(2024, 1, 12, 9, 47);
document.getElementById("weekday").textContent = `Короткий формат: ${getWeekDay(date)}`;
