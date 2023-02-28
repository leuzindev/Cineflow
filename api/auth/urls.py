from django.urls import path
from auth.views import MyObtainTokenPairView, RegisterView, get_user, list_users
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('login/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('users/', list_users, name='list_users'),
    path('users/<int:pk>/', get_user, name='get_user'),
]
