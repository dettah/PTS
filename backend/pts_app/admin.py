from django.contrib import admin
from .models import Patient, Doctor

@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'country']

@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'country', 'hospital', 'specialty']
