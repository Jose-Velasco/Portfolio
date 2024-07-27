# from django.db.models import TextChoices
from enum import Enum
# class TechIcon(TextChoices):
#   ANGULAR = "ANGULAR", "#"
#   CSS = "CSS", "#"
#   PYTHON = "PYTHON", "#"
#   DJANGO = "DJANGO", "#"
#   GIT = "GIT", "#"
#   HTML = "HTML", "#"
#   TYPESCRIPT = "TYPESCRIPT", "#"
#   UBUNTU = "UBUNTU", "#"

#   def __init__(self, label, url) -> None:
#     self.label = label
#     self.url = url
class TechIcon(Enum):
  ANDROID = ("Android", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain-wordmark.svg")
  ANGULAR = ("Angular", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg")
  APACHE = ("Apache", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original-wordmark.svg")
  BASH = ("Bash", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg")
  CPLUSPLUS = ("Cplusplus", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg")
  CSS3 = ("Css3", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg")
  DIGITALOCEAN = ("Digitalocean", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original-wordmark.svg")
  DJANGO = ("Django", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg")
  DJANGOREST = ("Djangorest", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg")
  DOCKER = ("Docker", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg")
  FASTAPI = ("Fastapi", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original-wordmark.svg")
  FIGMA = ("Figma", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg")
  FIREBASE = ("Firebase", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg")
  FLASK = ("Flask", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg")
  GIT = ("Git", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg")
  GITHUBACTIONS = ("Githubactions", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg")
  GOOGLECLOUD = ("Googlecloud", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg")
  HTML5 = ("Html5", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg")
  JAVA = ("Java", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg")
  JAVASCRIPT = ("Javascript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg")
  JUPYTER = ("Jupyter", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg")
  MATPLOTLIB = ("Matplotlib", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original-wordmark.svg")
  MYSQL = ("Mysql", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg")
  NETWORKX = ("Networkx", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/networkx/networkx-original.svg")
  NGINX = ("Nginx", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg")
  NUMPY = ("Numpy", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg")
  PANDAS = ("Pandas", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg")
  PLOTLY = ("Plotly", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original-wordmark.svg")
  PORTAINER = ("Portainer", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/portainer/portainer-original-wordmark.svg")
  POSTMAN = ("Postman", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg")
  PYTHON = ("Python", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg")
  PYTORCH = ("Pytorch", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original-wordmark.svg")
  REACT = ("React", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg")
  RXJS = ("Rxjs", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg")
  SASS = ("Sass", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg")
  SCIKITLEARN = ("Scikitlearn", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg")
  SELENIUM = ("Selenium", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg")
  SQLITE = ("Sqlite", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original-wordmark.svg")
  TENSORFLOW = ("Tensorflow", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original-wordmark.svg")
  TYPESCRIPT = ("Typescript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg")
  UBUNTU = ("Ubuntu", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original-wordmark.svg")

  def __init__(self, label, url) -> None:
    self.label = label
    self.url = url
