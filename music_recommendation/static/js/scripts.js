// music-recommendation-project/music-recommendation-project/music_recommendation/static/js/scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const moodSelect = document.getElementById('mood-select');
    const recommendationsContainer = document.getElementById('recommendations');

    moodSelect.addEventListener('change', function() {
        const selectedMood = moodSelect.value;
        fetch(`/recommend_music/${selectedMood}`)
            .then(response => response.json())
            .then(data => {
                recommendationsContainer.innerHTML = '';
                if (data.recommendations.length > 0) {
                    data.recommendations.forEach(song => {
                        const songElement = document.createElement('li');
                        songElement.textContent = song;
                        recommendationsContainer.appendChild(songElement);
                    });
                } else {
                    recommendationsContainer.textContent = 'No recommendations available for this mood.';
                }
            })
            .catch(error => {
                console.error('Error fetching recommendations:', error);
                recommendationsContainer.textContent = 'An error occurred while fetching recommendations.';
            });
    });
});