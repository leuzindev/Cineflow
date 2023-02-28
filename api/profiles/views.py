from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Profiles
from .serializers import ProfileSerializer
from django.contrib.auth.models import User
from auth.serializers import UserSerializer





@api_view(['GET'])
def get_profile(request, pk):
    profile = Profiles.objects.filter(pk=pk, username=request.user).first()
    if not profile:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ProfileSerializer(profile)
    return Response(serializer.data)



@api_view(['POST'])
def create_profile(request):
    serializer = ProfileSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(username=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['DELETE'])
def delete_profile(request, pk):
    profile = Profiles.objects.filter(pk=pk, username=request.user).first()
    if not profile:
        return Response(status=status.HTTP_404_NOT_FOUND)
    profile.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)