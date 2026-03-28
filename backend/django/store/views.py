from . import models, serializers
from django.http import JsonResponse

def store(request):
    data = models.Game.objects.all()
    serializer = serializers.GameSerializer(data, many=True)
    return JsonResponse({'games': serializer.data})

def games_by_platform(request, platform_name):
    data = models.Game.objects.filter(platforms__platform_name__iexact=platform_name)
    serializer = serializers.GameSerializer(data, many=True)
    return JsonResponse({'games': serializer.data})