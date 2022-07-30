import { Post, Project } from "@/utils/types";
import { useEffect, useState } from "react";

export const useFilter = (query: string, data: Project[] | Post[]) => {
  const [filteredArray, setFilteredArray] = useState(data);

  useEffect(() => {
    setFilteredArray(
      data.filter(value =>
        value.data.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, data]);

  return filteredArray;
};
