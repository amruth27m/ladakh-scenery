from django.shortcuts import render
from django.http import HttpResponse
from . import models
# Create your views here.

def home(request):

    packageList = models.Package.objects.all()
    contactDetail = models.ContactDetails.objects.filter(cid=1)
    context = {
        'packageList': packageList,
        contactDetail: contactDetail
    }

    return render(request,'homePage/index.html', context)