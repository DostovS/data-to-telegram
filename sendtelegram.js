//bot token
let telegram_bot_id = "5562018235:AAGOduu4sDBc6Y9CIqRKKrcY5VURPAO-gZ4"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
let chat_id = 5064622019; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
let u_name, email, message;
let ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Name: " + u_name + "\nEmail: " + email + "\nMessage: " + message + "\nSite: formajsc.netlify.app" ;
};
let sendtelegram = function() {
    ready();
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};