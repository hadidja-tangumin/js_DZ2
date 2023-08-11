let starbucks = {
    coffee: {
        black_coffee: 'black coffee',
        white_coffee: 'white coffee'
    },
    tea: {
        black_tea: 'black tea',
        green_tea: 'green tea'
    }
};
console.log(starbucks);





let city = ['Bishkek', 'Los Angeles', 'Chicago', 'New York', 'Houston', 'Dallas', 'Philadelphia', 'Seattle'];
for(let i = 0; i < city.length; i++){
    if (city[i].length > 7){
        console.log(city[i]);
    }
}





let day = Number(prompt('day'));
switch (day){
    case 1:
        alert('Monday');
        break
    case 2:
        alert('Tuesday');
        break
    case 3:
        alert('Wednesday');
        break
    case 4:
        alert('Thursday');
        break
    case 5:
        alert('Friday');
        break
    case 6:
        alert('Saturday');
        break
    case 7:
        alert('Sunday');
        break
    default:
        console.error('ERROR');
}