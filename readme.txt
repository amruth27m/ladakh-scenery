Website for ladakh scenery tours and travels

Setup

virtualenv venv
source venv/bin/activate

clone the repository and cd into it

pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate


#Create superuser
python manage.py createsuperuser
python manage.py runserver
