import React from "react";
import {
  Box,
  Avatar,
  Heading,
  Flex,
  Text,
} from "@chakra-ui/react";

const Profile = ({ id, name, company, username, email, address }) => {
  return (
    <Box>
      <Flex justifyContent="space-between" align="center" px="1rem">
        <Avatar
          size={{base:"sm", sm: "md", md: "lg"}}
          name={name}
          src={`https://avatars.dicebear.com/api/avataaars/:${id}.svg`}
        />
        <Heading as="h3" size={{base: "sm", md: "md"}} >
          {name}
        </Heading>   
        <Text display={{base: "none", lg: "block"}}>{company.name}</Text>
      </Flex>
    </Box>
  );
};

export default Profile;
