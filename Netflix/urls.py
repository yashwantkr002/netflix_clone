"""
URL configuration for Netflix project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from core.views import*



urlpatterns = [
    path('admin/', admin.site.urls),
    path('',index,name="index"),
    path('tv/',tv,name="tv"),
    path('movies/',movie,name="movies"),
    path('login/',login_page,name='login'),
    path('singup/',register,name='singup'),
    path('activate/<email_token>/',activate_email,name='activate'),
    path('logout/',log_out,name='logout'),
    path('forget/',forget,name='forget'),
    path('email/',emailsend,name='eamil'),

]
