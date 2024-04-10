#!/bin/ash

python manage.py flush --no-input && \
python manage.py migrate && \
python manage.py loaddata postgres_data.json

exec "$@"