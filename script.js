let likeDislikeCount = 0;

document.getElementById('fetchButton').addEventListener('click', function() {
     fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
        document.getElementById('joke').textContent = data.value;
    });
});

document.getElementById('thumbsUpButton').addEventListener('click', function() {
    likeDislikeCount++;
    document.getElementById('rating').textContent = 'Total Like/Dislike: ' + likeDislikeCount;
});

document.getElementById('thumbsDownButton').addEventListener('click', function() {
    likeDislikeCount--;
    document.getElementById('rating').textContent = 'Total Like/Dislike: ' + likeDislikeCount;
});