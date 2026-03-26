from django.db import models


class Genre(models.Model):
    genre_name = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.genre_name

class Platform(models.Model):
    platform_name = models.CharField(max_length=20, unique=True)
    def __str__(self):
        return self.platform_name

class Game(models.Model):
    title = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    genres = models.ManyToManyField(Genre, related_name='games')
    developer = models.CharField(max_length=40)
    release_date = models.DateField()
    platforms = models.ManyToManyField(Platform, related_name='games')
    img_url = models.URLField(blank=False)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    quantity_sold = models.IntegerField()
    def __str__(self):
        return self.title
