from . import models, serializers
from django.http import JsonResponse

def store(request):
    data = models.Game.objects.all()
    serializer = serializers.GameSerializer(data, many=True)
    return JsonResponse({'games': serializer.data})
