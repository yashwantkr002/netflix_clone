from django.conf import settings
from django.core.mail import send_mail


def send_account_activation_email(email,email_token):
    subject='you need to activate your account'
    email_from=settings.EMAIL_HOST_USER
    massage=f'hi click on link to activate account  http://127.0.0.1:8000/activate/{email_token}'
    send_mail(subject,massage,email_from,[email],)
    
