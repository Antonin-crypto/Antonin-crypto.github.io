from django.urls import path
from .views import ProduitListAPIView

urlpatterns = [
    path('produits/', ProduitListAPIView.as_view(), name='produit-list'),
]
