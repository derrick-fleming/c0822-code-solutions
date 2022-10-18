select "addresses"."line1",
       "addresses"."district",
       "cities"."name" as "city"
    from "cities"
    join "addresses" using ("cityId");
