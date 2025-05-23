# accounts/views.py
from django.contrib.auth.views import LoginView
from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import ensure_csrf_cookie

# class CustomLoginView(LoginView):
    #def form_valid(self, form):
       #user = form.get_user()
        #if user.is_staff:
            #return redirect(reverse_lazy('admin:index'))
        #return redirect('http://localhost:4321/user')

# Vue d'inscription
@api_view(['POST'])
def register_user(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({'error': 'Tous les champs sont requis.'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({'error': 'Ce nom d’utilisateur existe déjà.'}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, password=password)
    return Response({'message': 'Utilisateur créé avec succès', 'username': user.username}, status=201)


# Vue de connexion
@api_view(['POST'])
def login_user(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({'error': 'Champs requis'}, status=status.HTTP_400_BAD_REQUEST)

    user = authenticate(username=username, password=password)

    if user is not None:
        login(request, user)

        if user.is_staff:
            return Response({'redirect': '/admin/'})  # Django admin
        else:
            return Response({'redirect': 'http://localhost:4321/user'})
    else:
        return Response({'error': 'Identifiants invalides'}, status=status.HTTP_401_UNAUTHORIZED)


@ensure_csrf_cookie
@api_view(['GET'])
def get_csrf_token(request):
    return Response({'message': 'CSRF cookie set'})