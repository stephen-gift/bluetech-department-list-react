"use client";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  forwardRef,
} from "@chakra-ui/react";
import React from "react";

interface SearchInputProps extends InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BDLSearchInput = forwardRef<SearchInputProps, "input">(
  ({ placeholder = "Search...", value, onChange, ...props }, ref) => {
    return (
      <Box>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={SearchIcon} color="gray.500" />
          </InputLeftElement>
          <Input
            ref={ref}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...props}
          />
        </InputGroup>
      </Box>
    );
  }
);

export default BDLSearchInput;
