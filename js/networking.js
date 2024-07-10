let tg = window.Telegram.WebApp;

Telegram.WebApp.onEvent('themeChanged', function() {
    document.body.style.backgroundColor = Telegram.WebApp.themeParams.bg_color;
    document.body.style.color = Telegram.WebApp.themeParams.text_color;
});
