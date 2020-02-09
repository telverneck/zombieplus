// import Pool  from 'pg'

// const connectionString = 'postgresql://postgres:qaninja@pgdb:5432/zombieplus'
// const pool = new Pool({ connectionString: connectionString })

// export default {
//     removeByTitle: (title) => {
//         pool
//             .query(`DELETE FROM public.movies where title = '${title}';`)
//     },

//     insertMovie: (movie) => {
//         let query = `INSERT INTO public.movies(
//             title, status, year, release_year, "cast", overview, cover, created_at, updated_at)
//             VALUES ('${movie.title}','${movie.status}','${movie.year}', '${movie.releaseDate}',
//                     '${movie.cast}', '${movie.cover}', '${movie.plot}', current_timestamp, current_timestamp ));`
//         return new Promise((resolve, reject)=> {
//             pool 
//                 .query(query)
//                 .then(res => {
//                     resolve(res)
//                 })
//                 .catch(e => reject(e.stack))

//         }) 

//         }

//     }
// }