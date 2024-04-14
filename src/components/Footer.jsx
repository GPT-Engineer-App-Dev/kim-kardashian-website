import { Box, Text, Container, Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.100" py={10}>
      <Container maxW="container.lg">
        <Divider mb={6} />
        <Text textAlign="center">&copy; 2023 Kim Kardashian. All rights reserved.</Text>
      </Container>
    </Box>
  );
};

export default Footer;
