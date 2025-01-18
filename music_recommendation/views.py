from django.shortcuts import render
from django.http import JsonResponse

# Sample data for music recommendations based on moods
MUSIC_DATA = {
    'happy': ['Happy Song 1', 'Happy Song 2', 'Happy Song 3'],
    'sad': ['Sad Song 1', 'Sad Song 2', 'Sad Song 3'],
    'relaxed': ['Relaxed Song 1', 'Relaxed Song 2', 'Relaxed Song 3'],
    'energetic': ['Energetic Song 1', 'Energetic Song 2', 'Energetic Song 3'],
}

def home(request):
    return render(request, 'music_recommendation/home.html')

def recommend_music(request, mood):
    recommendations = MUSIC_DATA.get(mood, [])
    return JsonResponse({'mood': mood, 'recommendations': recommendations})