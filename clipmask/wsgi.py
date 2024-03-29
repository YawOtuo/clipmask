"""
WSGI config for clipmask project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

from clipmask.settings import BASE_DIR, STATIC_ROOT, STATIC_URL

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'clipmask.settings')


application = get_wsgi_application()
