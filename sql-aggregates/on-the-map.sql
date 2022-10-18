select "countries"."name" as "countryName",
        count ("countryId") as "numberCities"
  from "countries"
  join "cities" using ("countryId")
  group by "countries"."name"
