from rest_framework import serializers
from .models import Game



class GameSerializer(serializers.ModelSerializer):
    genres = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='genre_name'
    )
    platforms = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='platform_name'
    )
    class Meta:
        model = Game
        fields = '__all__'
