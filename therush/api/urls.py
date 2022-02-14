from django.urls import path
from .views import get_test_data

urlpatterns = [path("rush-stats", get_test_data)]
