from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from account.models import Profile
from django.conf import settings
from django.contrib.auth.decorators import login_required


# Create your views here.

@login_required(login_url='/login/')
def index(request):
    return render(request,'index.html',context={'data':'index','css':'index'})
@login_required(login_url='/login/')
def tv(request):
    return render(request,'tv.html',context={'data':'TV','css':'index'})
@login_required(login_url='/login/')
def movie(request):
    return render(request,'movies.html',context={'data':'movies','css':'index'})


def login_page(request):
    if request.method=='POST':
        username=request.POST.get('username')
        password=request.POST.get('password')

        user_obj=User.objects.filter(username = username)
        if not user_obj.exists():
            messages.error(request, "Invaled Username ")
            return redirect('/login/')
        else:
            if not user_obj[0].profile.is_email_veryfied:
                messages.warning(request, "your accout is not veryfied")
                return redirect('/login/')
            else:
                 user=authenticate(username=username,password=password)
                 if user is None:
                     messages.error(request, "invailed password.")
                     return redirect('/login/')
                 
                 else:
                     login(request,user)
                     return redirect('/')


    else:
         return render(request,'login.html',context={'data':'login','css':'login'})

def register(request):
    if request.method=='POST':
        username=request.POST.get('username')
        fullname=request.POST.get('name')
        email=request.POST.get('email')
        password=request.POST.get('password')

        user_obj=User.objects.filter(username = username)

        if user_obj.exists():
            messages.error(request, "Username is not available")
            return redirect('/singup/')
        
        else:
            user_obj=User.objects.create(
                username=username,
                first_name=fullname,
                email=email,
            )
            user_obj.set_password(password)
            user_obj.save()
            return redirect('/email/')

    else:
        return render(request,'registation.html',context={'css':'registation'})
    

def activate_email(request,email_token):
    try:
        user=Profile.objects.get(email_token=email_token)
        if user.is_email_veryfied==True:
           return HttpResponse("your Email is veryfide")
        else:
            user.is_email_veryfied=True
            user.save()
            return redirect('/')
    except Exception as e:
        return HttpResponse('invailed email token')
    
@login_required(login_url='/login/')
def log_out(request):
    logout(request)
    return redirect('/login/')


def forget(request):
    return render(request,'forget.html',context={'css':'forget'})
        
def emailsend(request):
    return render(request,'email.html',context={'css':'email'})


