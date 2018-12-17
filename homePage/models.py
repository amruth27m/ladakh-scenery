from django.db import models

# Create your models here.
# TODO: Read data from this model in home template 1. Contact-details 2. Package details
class ContactDetails(models.Model):

    def __str__(self):
        return "Contact details displayed in home page"

    cid = models.IntegerField(primary_key=True)
    email = models.EmailField(null=False)
    phoneNumber = models.IntegerField(null=False)
    instagram = models.CharField(max_length=200)
    facebook = models.CharField(max_length=200)

class Package(models.Model):

    def __str__(self):
        return "Package " + self.packageName

    packageName = models.CharField(max_length=400)
    packageDescription = models.CharField(max_length=800)
    packageCoverImage = models.URLField(max_length=400)

class Itnery(models.Model):

    def __str__(self):
        return

    package = models.ForeignKey(Package,null=True,on_delete=models.SET_NULL)



class TripRoute(models.Model):

    iterny = models.ForeignKey(Itnery,null=True,on_delete=models.SET_NULL)
    routeDescription = models.TextField(max_length=1000)

