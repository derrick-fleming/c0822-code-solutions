select "films"."title",
       "films"."releaseYear",
       "genres"."name",
       "filmGenre"."filmId",
       "filmGenre"."genreId"
    from "films"
    join "filmGenre" using ("filmId")
    join "genres" using ("genreId")
  where "films"."title" = 'Boogie Amelie';
