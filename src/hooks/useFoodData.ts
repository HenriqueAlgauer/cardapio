import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<FoodData[]> => {
  const resposnse = axios.get(API_URL + "/food");
  return resposnse;
};

export function useFoodData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["food-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}