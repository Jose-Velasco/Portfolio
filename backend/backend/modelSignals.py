from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Project, ImageAlbum

@receiver(post_save, sender=Project)
def create_album(sender, instance: Project, created, **kwargs):
  if created and instance.album == None:
    defaultName = f"Album: {instance.title}"
    defaultAlbum = ImageAlbum.objects.create(name=defaultName)
    instance.album = defaultAlbum
    instance.save()
