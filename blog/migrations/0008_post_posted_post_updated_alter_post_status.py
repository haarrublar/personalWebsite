# Generated by Django 4.1 on 2024-04-01 21:50

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_post_keywords'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='posted',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='post',
            name='updated',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='status',
            field=models.CharField(choices=[('DF', 'Draft'), ('PT', 'Posted')], default='DF', max_length=2),
        ),
    ]
