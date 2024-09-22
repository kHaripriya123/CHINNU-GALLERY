import { Button } from "@material-tailwind/react";
import FetchExcelData from "./FetchExcelData";

const cityData = [{
    "city": "Bangalore",
    "average_salary_per_month_INR": 65000,
    "rent_per_month_INR": 15000,
    "groceries_per_month_INR": 8000,
    "transportation_per_month_INR": 7000,
    "living_cost_per_month_INR": 35000
  },
  {
    "city": "Hyderabad",
    "average_salary_per_month_INR": 60000,
    "rent_per_month_INR": 12000,
    "groceries_per_month_INR": 7000,
    "transportation_per_month_INR": 6000,
    "living_cost_per_month_INR": 30000
  },
  {
    "city": "Pune",
    "average_salary_per_month_INR": 55000,
    "rent_per_month_INR": 10000,
    "groceries_per_month_INR": 6000,
    "transportation_per_month_INR": 4000,
    "living_cost_per_month_INR": 25000
  },
  {
    "city": "Chennai",
    "average_salary_per_month_INR": 70000,
    "rent_per_month_INR": 15000,
    "groceries_per_month_INR": 7000,
    "transportation_per_month_INR": 6000,
    "living_cost_per_month_INR": 28000
  },
  {
    "city": "Mumbai",
    "average_salary_per_month_INR": 80000,
    "rent_per_month_INR": 25000,
    "groceries_per_month_INR": 10000,
    "transportation_per_month_INR": 5000,
    "living_cost_per_month_INR": 40000
  },
  {
    "city": "Delhi-NCR",
    "average_salary_per_month_INR": 75000,
    "rent_per_month_INR": 20000,
    "groceries_per_month_INR": 9000,
    "transportation_per_month_INR": 7000,
    "living_cost_per_month_INR": 38000
  },
  {
    "city": "Kolkata",
    "average_salary_per_month_INR": 50000,
    "rent_per_month_INR": 8000,
    "groceries_per_month_INR": 5000,
    "transportation_per_month_INR": 4000,
    "living_cost_per_month_INR": 22000
  }
]

const ITCities = () => {
  return (
    <div>

      
<div>
      <FetchExcelData/>
      </div>
      <div>
      <table  className="table-auto w-full  px-4 py-2">
        <thead className="">             
          <tr>
          <th className="px-4 py-2">City</th>
          <th className="px-4 py-2">Average Salary(per month in INR)</th>
          <th className="px-4 py-2">Rent(per month in INR)</th>
          <th className="px-4 py-2">Groceries(per month in INR)</th>
          <th className="px-4 py-2">transportation(per month in INR)</th>
          <th className="px-4 py-2">Living Cost(per month in INR)</th>
</tr>
        </thead>
        <tbody>
         
        {cityData.map((cities)=> (
          <tr>
         <td className="border px-4 py-2">{cities.city} </td>
          <td className="border px-4 py-2">{cities.average_salary_per_month_INR}</td>
          <td className="border px-4 py-2">{cities.rent_per_month_INR}</td>
          <td className="border px-4 py-2">{cities.groceries_per_month_INR}</td>
          <td className="border px-4 py-2">{cities.transportation_per_month_INR}</td>
          <td className="border px-4 py-2">{cities.living_cost_per_month_INR}</td>
          
          </tr>
        ))}
        </tbody>
      </table>

      </div>
    </div>
  )
}

export default ITCities;

