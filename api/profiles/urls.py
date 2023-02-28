from django.urls import path
from .views import create_profile, delete_profile, get_profile

urlpatterns = [
    path('profiles/create/', create_profile, name='create_profile'),
    path('profiles/<int:pk>/delete/', delete_profile, name='delete_profile'),
    path('profiles/<int:pk>/', get_profile, name='get_profile'),
    
]
