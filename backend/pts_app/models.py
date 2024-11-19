from django.contrib.auth.models import AbstractUser
from django.db import models


class Patient(AbstractUser):
    
    country = models.CharField(max_length=255, default='Unknown')
    medical_history = models.TextField(blank=True, null=True)
    
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='patients', 
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='patients',  
        blank=True
    )


class Doctor(AbstractUser):
    country = models.CharField(max_length=255, default='Unknown')
    hospital = models.CharField(max_length=255, default='Unknown')
    specialty = models.CharField(max_length=255, default='Unknown')

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='doctors',  
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='doctors',
        blank=True
    )
    
    
    
    # Additional fields for Doctor if any


# from django.db import models
# from django.contrib.auth.models import AbstractUser
# # Create your models here.

# class Patient(AbstractUser):
#     medical_history = models.TextField(blank=True)


# class Doctor(AbstractUser):
#     specialty = models.CharField(max_length=255, blank=True)


# i wanna build a software that will enable doctors to keep track of their patients drug intake after they might have prescribed it for them. now the system must be able to take in various health related data about patients, like genotype etc. it should be able to use this data to train a model in predicting if a patient has the liklihood of certain illnesses based on their drug intake history.
