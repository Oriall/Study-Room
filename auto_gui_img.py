from flask import Flask, render_template, request, jsonify
from selenium import webdriver
from PIL import Image
import io
import smtplib
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart
import threading
import time

app = Flask(__name__)

thoi_gian_dem_nguoc = 60  # Đặt thời gian đếm ngược

def chup_va_gui_anh_man_hinh():
    # Chụp ảnh màn hình bằng Selenium 
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    driver = webdriver.Chrome(chrome_options=options)
    driver.get('http://localhost:5000/')  # Điều chỉnh URL theo nhu cầu

    anh_man_hinh = driver.get_screenshot_as_png()
    driver.quit()

    # Chuyển đổi ảnh màn hình thành hình ảnh PIL
    img = Image.open(io.BytesIO(anh_man_hinh))

    # Lưu ảnh tạm thời 
    img.save('anh_man_hinh.png')

    # Gửi ảnh màn hình qua email
    email_nguoi_gui = "email_cua_ban@gmail.com"
    email_nguoi_nhan = "email_nguoi_nhan@gmail.com"

    tin_nhan = MIMEMultipart()
    tin_nhan["From"] = email_nguoi_gui
    tin_nhan["To"] = email_nguoi_nhan
    tin_nhan["Subject"] = "Ảnh Màn Hình"

    noi_dung = MIMEText("Dưới đây là ảnh màn hình bạn yêu cầu.")
    tin_nhan.attach(noi_dung)

    du_lieu_anh = open('anh_man_hinh.png', 'rb').read()
    anh = MIMEImage(du_lieu_anh, name="anh_man_hinh.png")
    tin_nhan.attach(anh)

    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()
    server.login(email_nguoi_gui, "mat_khau_ung_dung_cua_ban")  

    server.sendmail(email_nguoi_gui, email_nguoi_nhan, tin_nhan.as_string())
    server.quit()

@app.route('/')
def trang_chu():
    return render_template('index.html')

@app.route('/bat_dau_dem_nguoc', methods=['POST'])
def bat_dau_dem_nguoc():
    global thoi_gian_dem_nguoc
    thoi_gian_dem_nguoc = int(request.form.get('thoi_gian_dem_nguoc', 60))
    dem_nguoc = threading.Timer(thoi_gian_dem_nguoc, chup_va_gui_anh_man_hinh)
    dem_nguoc.start()
    return jsonify({"thong_bao": "Đã bắt đầu đếm ngược"})

if __name__ == '__main__':
    app.run(debug=True)
