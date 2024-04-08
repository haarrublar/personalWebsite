# Generated by Django 5.0.4 on 2024-04-07 15:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AuthorInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author_name', models.CharField(max_length=50)),
                ('author_email', models.EmailField(max_length=100)),
                ('author_git_user', models.CharField(max_length=50)),
                ('author_country', models.CharField(max_length=50)),
                ('author_photo', models.ImageField(upload_to=None)),
                ('author_resume', models.CharField()),
            ],
        ),
    ]