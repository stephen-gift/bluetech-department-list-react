"use client";

import { Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useProductContext } from "../../utils/context/ProductContext";
import { BDLTable, BDLTableSkeleton } from "../../components";

const BDLHomePageContainer = () => {
  const { products, loading: contextLoading, error } = useProductContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate loading for 3 seconds

    return () => clearTimeout(timer); // Clear timeout if the component is unmounted
  }, []);

  if (loading || contextLoading) {
    return (
      <>
        <BDLTableSkeleton />
        {/* Placeholder for loading state */}
      </>
    );
  }

  if (error) {
    return <Text>{error}</Text>; // Placeholder for error state
  }

  return (
    <>
      <Flex flexDir={"column"} gap={10}>
        <Heading fontWeight={500} fontSize={18} size={"md"}>
          Department List
        </Heading>
        <BDLTable data={products} />
      </Flex>
    </>
  );
};

export default BDLHomePageContainer;
