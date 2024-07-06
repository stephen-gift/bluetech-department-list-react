"use client";
import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tfoot,
  TableContainer,
  Image,
  Text,
  Checkbox,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Select,
  Flex,
  Center,
  IconButton,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Product } from "../../../types/global";

// Define the props for the reusable table component
interface BDLTableProps {
  data: Product[];
}

const BDLTable: React.FC<BDLTableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default items per page

  const bg = useColorModeValue("#F0F4FE", "gray.700"); // Light mode and dark mode background colors

  // Handler to toggle all checkboxes
  const handleToggleAllCheckboxes = (isChecked: boolean) => {
    const updatedCheckedItems = checkedItems.map(() => isChecked);
    setCheckedItems(updatedCheckedItems);
  };

  // Handler to toggle individual checkbox
  const handleCheckboxChange = (index: number) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  // Check if all checkboxes are checked
  const isAllChecked = checkedItems.every((item) => item);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Change items per page
  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(parseInt(value, 10));
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <Box>
      <TableContainer>
        <Table size="sm">
          <Thead bg={bg} h={"40px"}>
            <Tr>
              <Th>
                <Checkbox
                  isChecked={isAllChecked}
                  onChange={(e) => handleToggleAllCheckboxes(e.target.checked)}
                />
              </Th>
              <Th>S/N</Th>
              <Th>Image</Th>
              <Th>SKU</Th>
              <Th>Name</Th>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Brand</Th>
              <Th isNumeric>Cost Price</Th>
              <Th isNumeric>Quantity</Th>
              <Th>Size</Th>
            </Tr>
          </Thead>
          <Tbody borderRadius={14}>
            {currentItems.map((product, index) => (
              <Tr key={product.SKU}>
                <Td>
                  <Checkbox
                    isChecked={checkedItems[index]}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </Td>
                <Td>{index + 1}</Td>
                <Td>
                  <Tooltip
                    label={
                      <Image
                        alt={product.Name}
                        src={product.Image_1}
                        boxSize="200px"
                      />
                    }
                    bg={"white"}
                    hasArrow
                    openDelay={500}
                    placement="right"
                  >
                    <Image
                      src={product.Image_1}
                      alt={product.Name}
                      boxSize="50px"
                    />
                  </Tooltip>
                </Td>
                <Td>{product.SKU}</Td>
                <Td>
                  <Tooltip label={product.Name}>
                    <Text isTruncated maxWidth="150px">
                      {product.Name}
                    </Text>
                  </Tooltip>
                </Td>
                <Td>
                  <Tooltip label={product.Title}>
                    <Text isTruncated maxWidth="200px">
                      {product.Title}
                    </Text>
                  </Tooltip>
                </Td>
                <Td>
                  <Tooltip label={product.Description}>
                    <Text isTruncated maxWidth="200px">
                      {product.Description}
                    </Text>
                  </Tooltip>
                </Td>
                <Td>
                  <Tooltip label={product.Brand}>
                    <Text isTruncated maxWidth="100px">
                      {product.Brand}
                    </Text>
                  </Tooltip>
                </Td>
                <Td isNumeric>{product["Cost Price"]}</Td>
                <Td isNumeric>{product.Quantity}</Td>
                <Td>{product.size}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot bg={bg} h={"40px"}>
            <Tr>
              <Th>
                <Checkbox
                  isChecked={isAllChecked}
                  onChange={(e) => handleToggleAllCheckboxes(e.target.checked)}
                />
              </Th>
              <Th>S/N</Th>
              <Th>Image</Th>
              <Th>SKU</Th>
              <Th>Name</Th>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Brand</Th>
              <Th isNumeric>Cost Price</Th>
              <Th isNumeric>Quantity</Th>
              <Th>Size</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Box
        position="sticky"
        bottom="0"
        p={{ base: "2", md: "4" }}
        zIndex="docked"
      >
        <Flex
          mt="4"
          justifyContent="center"
          alignItems="center"
          gap={2}
          flexWrap="wrap"
        >
          <Center
            as={Flex}
            gap={2}
            flexDirection={{ base: "column", md: "row" }}
          >
            {data.length > itemsPerPage && (
              <Flex gap={2} alignItems="center" flexWrap="wrap">
                <IconButton
                  icon={<ChevronLeftIcon />}
                  aria-label="Previous page"
                  onClick={handlePreviousPage}
                  isDisabled={currentPage === 1}
                />
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Page {currentPage}
                  </MenuButton>
                  <MenuList>
                    {Array.from(
                      { length: Math.ceil(data.length / itemsPerPage) },
                      (_, i) => (
                        <MenuItem key={i + 1} onClick={() => paginate(i + 1)}>
                          Page {i + 1}
                        </MenuItem>
                      )
                    )}
                  </MenuList>
                </Menu>
                <IconButton
                  icon={<ChevronRightIcon />}
                  aria-label="Next page"
                  onClick={handleNextPage}
                  isDisabled={
                    currentPage === Math.ceil(data.length / itemsPerPage)
                  }
                />
              </Flex>
            )}
            <Select
              w={{ base: "150px", md: "200px" }}
              value={itemsPerPage}
              onChange={(e) => handleItemsPerPageChange(e.target.value)}
            >
              <option value="5">5 per page</option>
              <option value="10">10 per page</option>
              <option value="15">15 per page</option>
            </Select>
          </Center>
        </Flex>
      </Box>
    </Box>
  );
};

export default BDLTable;
