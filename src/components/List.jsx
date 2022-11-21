import React, {lazy, Suspense } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

const LazyComponent_Profile = lazy(() => import(`./Profile`));

const List = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      w="60%"
      m="3rem auto"
      gap="2rem"
      boxShadow="outline"
      p="6"
      rounded="md"
      bg="white"
    >
      {data?.map((elem) => {
        return (
          <Box boxShadow="2xl" rounded="40px" bg="white" my="1.5rem" key={elem.id}>
            <Suspense
              fallback={
                <Spinner
                  thickness="4px"
                  speed="0.78s"
                  emptyColor="grey.200"
                  color=".500"
                  size="xl"
                />
              }
            >
              <LazyComponent_Profile {...elem} />
            </Suspense>
          </Box>
        );
      })}
    </Box>
  );
};

export default List;