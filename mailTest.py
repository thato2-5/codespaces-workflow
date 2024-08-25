import smtplib

sender_email = "your_email@gmail.com"
receiver_email = "recipient@example.com"
password = "your_app_password"

message = """\
Subject: Hi there

This message is sent from Python."""

try:
    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()  # Secure the connection
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, message)
    print("Email sent successfully!")
except Exception as e:
    print(f"Failed to send email: {e}")
