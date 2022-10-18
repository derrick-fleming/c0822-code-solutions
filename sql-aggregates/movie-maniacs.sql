select "firstName",
       "lastName",
      sum ("amount") as "totalPayments"
    from "customers"
    join "payments" using ("customerId")
    group by "customerId"
    order by "totalPayments" desc;
