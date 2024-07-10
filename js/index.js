let tg = window.Telegram.WebApp;

fetch('http://147.45.246.252/user_info/${tg.initDataUnsafe.user.id}')
  .then(response => response.json())
  .then(data => {
    document.getElementById("description").innerHTML = data.description;
  })
  .catch(error => console.error('Error:', error));

tg.expand();

tg.MainButton.text = "Changed Text";
tg.MainButton.setText("Changed Text1");
tg.MainButton.textColor = "#F55353";
tg.MainButton.color = "#143F6B";
tg.MainButton.setParams({"color": "#143F6B"});

document.getElementById("name").innerHTML = tg.initDataUnsafe.user.first_name;
document.getElementById("family").innerHTML =tg.initDataUnsafe.user.last_name;




btn.addEventListener('click', function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide()
    }
    else {
        tg.MainButton.show()
    }
});



Telegram.WebApp.onEvent('themeChanged', function() {
    document.body.style.backgroundColor = Telegram.WebApp.themeParams.bg_color;
    document.body.style.color = Telegram.WebApp.themeParams.text_color;
});