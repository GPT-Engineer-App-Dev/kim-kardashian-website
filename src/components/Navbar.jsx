import { Box, HStack, Heading, Link, Container } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="white" py={4} boxShadow="md">
      <Container maxW="container.lg">
        <HStack justify="space-between">
          <Heading size="md">Kim Kardashian</Heading>
          <HStack spacing={8}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/events">Events</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
