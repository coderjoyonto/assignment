function kilometerToMeter(KM){
    var Meter = KM * 1000;
    return Meter;
}
var result = kilometerToMeter(5);
console.log(result);



function budgetCalculator(watch, phone, laptop){
    var watchPrice = watch * 5;
    var phonePrice = phone * 3;
    var laptopPrice = laptop * 1;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}
var totalPrice = budgetCalculator(50, 100, 500);
console.log(totalPrice);



function hotelCost(days){
    var cost = 0;
    if(days <= 10){
        cost = days * 100;
    }
    else if(days <= 20){
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
var totalCost = hotelCost(71);
console.log(totalCost);



function megaFriend(names){
    var words = names.split(" ");
    var longest = "";

    for(var word of words){
        
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}
var names = ("Jamal Kamal Rofiqul Monju zedan-al-musa");
var result = megaFriend(names);
console.log(result);
