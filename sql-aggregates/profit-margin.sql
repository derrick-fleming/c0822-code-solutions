with cte_cost as (
  select "filmId",
         "title",
         "description",
         sum("replacementCost") as "costs"
  from "films"
  join "inventory" using ("filmId")
  group by "filmId"
), cte_profit as (
  select sum ("amount") as "profit",
         "rentalId"
  from "payments"
  group by "rentalId"
)
select "title",
       "profit" - "costs" as "totalProfit"
  from cte_cost
    join "inventory" using ("filmId")
  join "rentals" using ("inventoryId")
  join cte_profit using ("rentalId")
  group by "filmId"
  order by "totalProfit" desc
  limit 5;
