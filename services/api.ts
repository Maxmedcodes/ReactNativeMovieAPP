export const TMDB_CONFIG={

BASE_URL:'https://api.themoviedb.org/3',
API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
headers:{
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
}

}


export const fetchMovies = async({query}: { query : string})=>{
    const endpoints = query
    ?`${TMDB_CONFIG.BASE_URL}/search/movies?query=${encodeURIComponent(query)}`
    :`${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoints,{
        method:'GET' ,
        headers: TMDB_CONFIG.headers,
    });



    if(!response.ok){
        // @ts-ignore
        throw new Error('Failed to fetch movies', response.statusText)
    }


    const data = await response.json();
    return data.result

}



// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTMwNDBhOTM2ZDQ2OWE1MzIxYzkyY2M2MWU1YjhlOSIsIm5iZiI6MTc0NzIzMDY1OC4wOCwic3ViIjoiNjgyNDlmYzJlMjQ3Mjk1MTM1MzMzZjg1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.PYWxj2qXewQ1mniYo4-6Ln2uTmeAs5YY2Hm5SZD69gU'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));