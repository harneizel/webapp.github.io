from flask import Flask, render_template, request, redirect, url_for, flash
import asyncio
import subprocess as sp
import datetime

app = Flask(__name__)


# обработка темпы от датчика
@app.route('/send-php')
def get_temp():
    try:
        result = sp.run(['php', 'test.php'], capture_output=True, text=True)
        return result.stdout
    except Exception as e:
        return str(e)

# получение данных для аналитики
@app.route('/get-feedback', methods=['POST'])
def get_datetime():
    pass


if __name__ == '__main__':
    try:
        app.run(debug=True) # запуск сайта #192.168.254.184
    except:
        print("Завершение работы")