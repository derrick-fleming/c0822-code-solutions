select "genres"."name" as "genreName",
       count ("filmId") as "numberFilms"
    from "actors"
    join "castMembers" using ("actorId")
    join "filmGenre" using ("filmId")
    join "genres" using ("genreId")
    where "firstName" = 'Lisa' and "lastName" = 'Monroe'
    group by "genreName";
