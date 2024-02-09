const joke = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political&type=single';


const getJoke = () => {

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            joke.textContent = data.joke
        });

}



btn.addEventListener('click', getJoke);