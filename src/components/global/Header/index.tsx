"use client";
import {
  BellIcon,
  ChevronDownIcon,
  HamburgerIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  Select,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useProductContext } from "../../../utils/context/ProductContext";

type Props = {};

const BDLHeader = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { updateProducts } = useProductContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [supplier, setSupplier] = useState("");
  const [last, setLast] = useState<number>(50);
  const [search, setSearch] = useState<string>("");

  const fetchData = async () => {
    try {
      await updateProducts(supplier, last, search); // Update context with fetched products
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error state
    }
  };

  useEffect(() => {
    fetchData();
  }, [supplier, last, search]); // Fetch data when component mounts

  const handleSupplierChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSupplier(e.target.value);
  };

  const handleLastChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLast(Number(e.target.value));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Box>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={10}
        >
          <Box p={5}>
            <Image alt="logo" src={"/images/logo.png"} />
          </Box>

          <Flex
            alignItems={"center"}
            w={"full"}
            justifyContent={"space-between"}
            display={{ base: "none", md: "flex" }}
          >
            <Flex>
              <Flex gap={5}>
                <FormControl>
                  <Select
                    value={supplier}
                    onChange={handleSupplierChange}
                    required
                  >
                    <option value="FragranceX">FragranceX</option>
                    <option value="FragranceNet">FragranceNet</option>
                    <option value="Morris Costumes">Morris Costumes</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <Input
                    type="number"
                    value={last}
                    onChange={handleLastChange}
                    placeholder="Enter last"
                    required
                  />
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={SearchIcon} color="gray.500" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      value={search}
                      onChange={handleSearchChange}
                      placeholder="search..."
                      required
                    />
                  </InputGroup>
                </FormControl>
              </Flex>
            </Flex>

            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Flex justifyContent={"center"} alignItems={"center"} gap={5}>
                <Box position={"relative"}>
                  <IconButton
                    isRound={true}
                    variant="solid"
                    //   colorScheme='teal'
                    aria-label="Done"
                    fontSize="25px"
                    icon={<BellIcon />}
                  />
                  <Badge
                    position="absolute"
                    content="1"
                    top="2"
                    right="2"
                    backgroundColor="red.500"
                    color="white"
                    borderRadius="full"
                    fontSize="0.5em"
                    p="1"
                    border={"2px"}
                  />
                </Box>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                    textDecoration={"none"}
                  >
                    <Flex
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={3}
                    >
                      <Avatar
                        size={"sm"}
                        src={
                          "/images/doctor-standing-with-folder-stethoscope 1.png"
                        }
                      />
                      <Text>Deko</Text>
                      <ChevronDownIcon />
                    </Flex>
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "/images/doctor-standing-with-folder-stethoscope 1.png"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <Heading>Deko</Heading>
                    </Center>
                  </MenuList>
                </Menu>
              </Flex>
            </Stack>
          </Flex>
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            icon={<HamburgerIcon />}
            variant={"outline"}
            aria-label="Open Menu"
          />
        </Flex>

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Image alt="logo" src={"/images/logoIcon.png"} boxSize={10} />
            </DrawerHeader>

            <DrawerBody>
              <FormControl>
                <Select
                  value={supplier}
                  onChange={handleSupplierChange}
                  required
                >
                  <option value="FragranceX">FragranceX</option>
                  <option value="FragranceNet">FragranceNet</option>
                  <option value="Morris Costumes">Morris Costumes</option>
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <Input
                  type="number"
                  value={last}
                  onChange={handleLastChange}
                  placeholder="Enter last"
                  required
                />
              </FormControl>
              <FormControl mt={4}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <SearchIcon color="gray.500" />
                  </InputLeftElement>
                  <Input
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="search..."
                    required
                  />
                </InputGroup>
              </FormControl>

              <Button
                mt={4}
                onClick={toggleColorMode}
                width="full"
                justifyContent="center"
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                gap={5}
                mt={4}
              >
                <Box position={"relative"}>
                  <IconButton
                    isRound={true}
                    variant="solid"
                    aria-label="Done"
                    fontSize="25px"
                    icon={<BellIcon />}
                  />
                  <Badge
                    position="absolute"
                    content="1"
                    top="2"
                    right="2"
                    backgroundColor="red.500"
                    color="white"
                    borderRadius="full"
                    fontSize="0.5em"
                    p="1"
                    border={"2px"}
                  />
                </Box>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                    textDecoration={"none"}
                  >
                    <Flex
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={3}
                    >
                      <Avatar
                        size={"sm"}
                        src={
                          "/images/doctor-standing-with-folder-stethoscope 1.png"
                        }
                      />
                      <Text>Deko</Text>
                      <ChevronDownIcon />
                    </Flex>
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "/images/doctor-standing-with-folder-stethoscope 1.png"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <Heading>Deko</Heading>
                    </Center>
                  </MenuList>
                </Menu>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};

export default BDLHeader;
