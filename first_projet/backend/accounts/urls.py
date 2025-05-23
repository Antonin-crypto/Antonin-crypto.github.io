# accounts/urls.py
from django.urls import path

from .views import register_user, login_user
from .views import get_csrf_token

urlpatterns = [
    path('login/', login_user, name='login_user'),
    path('register/', register_user, name='register'),
    path('csrf/', get_csrf_token),
]
