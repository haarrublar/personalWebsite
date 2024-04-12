#!/bin/ash

if [ "$DATABASE" = "sqlite" ]; then
    echo "Using sqlite DB"
elif [ "$DATABASE" = "postgres" ]; then
    echo "Waiting for postgres..."
    while ! nc -z $SQL_HOST $SQL_PORT; do
        sleep 0.1
    done
    echo "PostgreSQL started"
else
    echo "Using a different database engine"
fi

python manage.py migrate 

exec "$@"