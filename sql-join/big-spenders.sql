select "c"."firstName",
       "c"."lastName",
       "p".*
  from "customers" as "c"
  join "payments" as "p" using ("customerId")
  order by "amount" desc
  limit 10;
