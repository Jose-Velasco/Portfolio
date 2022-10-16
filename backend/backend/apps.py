from django.apps import AppConfig


class BackendConfig(AppConfig):
  default_auto_field = 'django.db.models.BigAutoField'
  name = 'backend'

  def ready(self):
    from .modelSignals import create_album
