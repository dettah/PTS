# from rest_framework import serializers
# from .models import Patient, Doctor

# class PatientSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Patient
#         fields = ['username', 'password', 'medical_history']

# class DoctorSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Doctor
#         fields = ['username', 'password', 'specialty']


from rest_framework import serializers
from .models import Patient, Doctor
from django.contrib.auth.hashers import make_password


class PatientSerializer(serializers.ModelSerializer):
    # Customizing how passwords are handled
    def validate_password(self, value):
        return make_password(value)  # Hash the password

    class Meta:
        model = Patient
        fields = ['username', 'password', 'first_name', 'last_name',
                  'email', 'country', 'medical_history']
        extra_kwargs = {
            'password': {'write_only': True}  # Ensure password is write-only
        }


class DoctorSerializer(serializers.ModelSerializer):

    def validate_password(self, value):
        return make_password(value)  # Hash the password

    class Meta:
        model = Doctor
        fields = ['username', 'password', 'first_name', 'last_name',
                  'email', 'country', 'hospital', 'specialty']

        extra_kwargs = {
            'password': {'write_only': True}
        }
