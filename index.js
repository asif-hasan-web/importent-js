//    PRoblem -01 একটা ফাংশন এ প্যারামিটার হিসেবে নিবে সের। তারপর সেটাকে মন এ কনভার্ট করে কত মন হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে।
// 1st problem Solve
function seerToMon(seer){
    if(seer > 0 ){
    var mon = seer / 40;
    return mon;
    }
    else {
    return 'invalid input';
    }
    }
    // console.log(seerToMon(400));
    // console.log(seerToMon(-400));

    //    Problem -02 (3 peramitter must use here) ১ টি শার্টের দাম – ১০০ টাকা১ টি প্যান্টের দাম – ২০০ টাকা ১ টি জুতার দাম – ৫০০ টাকা এখন সে যদি বিভিন্ন সংখ্যার শার্ট, প্যান্ট বা জুতা বিক্রি করে তাহলে টোটাল কত বিক্রি হলো সেই সংখ্যা রিটার্ন করতে হবে। 

    // 2nd problem Solve
    function totalSales(shartQuantity, pantQuantity, jutaQuantity){
    const perShartPrice = 100;
    const perPantPrice = 200;
    const perJutaPrice = 500;
    if ((shartQuantity >= 0) && (pantQuantity >= 0) && (jutaQuantity >=0 )){
    //multiple
    const shartPrice = perShartPrice * shartQuantity;
    const pantPrice = perPantPrice * pantQuantity;
    const jutaPrice = perJutaPrice * jutaQuantity;
    //total sales Price
    const total = shartPrice + pantPrice + jutaPrice;
    return total;
    }
    else{
    return "invalid input";
    }
    }
    // console.log(totalSales(1, 0 , -1));
    // console.log(totalSales(1, 0 , 1));

// Problem -03 প্যারামিটার হিসাবে নিবে কয়টা টি-শার্ট ডেলিভারি করবে। *যদি ১০০ বা তার কম টি-শার্ট পাঠাও তাহলে প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে। *যদি ১০০ এর বেশি কিন্তু ২০০ এর কম টি শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। *যদি ২০০ এর বেশি টি-শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০১ থেকে ২০০ পর্যন্ত যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। ২০০ এর বেশি যতগুলা আছে সেগুলার সবগুলা প্রতিটা ৫০ টাকা করে দিতে হবে। 

    // 3rd problem solve
    function deliveryCost(quantity){
    const firstCharge =100;
    const secondCharge =80;
    const lastcharge =50;
    //conditions
    if( quantity < 1){
    return 'please enter a positive number greater than 1';
    }
    else if(quantity <=100){
    const totalCharge = quantity * firstCharge;
    return totalCharge;
    }
    else if (quantity <= 200){
    const firstDeliveryCharge = 100 * firstCharge;
    const restCharge = quantity - 100;
    const secondDeliveryCharge = restCharge * secondCharge;
    const totalCharge = firstDeliveryCharge + secondDeliveryCharge;
    return totalCharge;
    }
    else {
    const firstDeliveryCharge = 100 * firstCharge;
    const secondDeliveryCharge = 100 * secondCharge;
    const restCharge = quantity - 200;
    const thirdDeliveryCharge = restCharge * lastcharge;
    const totalCharge = firstDeliveryCharge + secondDeliveryCharge +thirdDeliveryCharge;
    return totalCharge;
    }
    }
    // console.log(deliveryCost(-201));
    // console.log(deliveryCost(201));


    // 4th problem
    function perfectFriend(names){
    if( (typeof names) == 'object' ){
    let item = [];
    let hasPerfectFriend = false;
    for (let i = 0; i< names.length; i++){
    item = names[i];
    if( (typeof item) == 'string' && item.length == 5 ){
    hasPerfectFriend = true;
    return item;
    }
    }
    //check if no friend matched with 5 character
    if(hasPerfectFriend == false){
    return 'You have no perfect friend';
    }
    }else{
    return 'Invalid Input';
    }
    }
    // console.log(perfectFriend(['abul', 'babu', 'toma', 'asif', 'rohi']));
    // console.log(perfectFriend(['abul', 'babu', 'tomal', 'asif', 'rohi']));

