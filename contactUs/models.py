import datetime
from django.db import models
from django.utils import timezone
# Create your models here.
class Message(models.Model):

    def __str__(self):
        return self.email + "-" + self.message

    def was_published_recently(self):
        return self.messageSubmissionTime >= timezone.now() - datetime.timedelta(days=2)

    def was_modified_recently(self):
        return self.messageModificationTime >= timezone.now() - datetime.timedelta(days=2)

    name = models.CharField(max_length=200,help_text='Name',verbose_name='Name')
    email = models.EmailField(help_text='Email',verbose_name='Email')
    message = models.TextField(help_text='Message',verbose_name='Message',max_length=2000)
    messageSubmissionTime = models.DateTimeField(auto_now_add=True)
    messageModificationTime = models.DateTimeField(auto_now=True,null=True,blank=True)