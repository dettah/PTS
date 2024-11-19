from django.urls import path
from .views import PatientRegisterView, DoctorRegisterView, LoginView

urlpatterns = [
    path('register/patient/', PatientRegisterView.as_view(), name='register_patient'),
    path('register/doctor/', DoctorRegisterView.as_view(), name='register_doctor'),
    path('login/', LoginView.as_view(), name='login'),
]
