import { Box, VStack, HStack, Heading, Text, Image, Link, Container, Divider } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navbar */}
      <Box bg="white" py={4} boxShadow="md">
        <Container maxW="container.lg">
          <HStack justify="space-between">
            <Heading size="md">Kim Kardashian</Heading>
            <HStack spacing={8}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Contact</Link>
            </HStack>
          </HStack>
        </Container>
      </Box>

      {/* Hero */}
      <Box bg="gray.50" py={20}>
        <Container maxW="container.lg">
          <HStack align="center" spacing={12}>
            <Image borderRadius="full" boxSize="300px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxraW0lMjBrYXJkYXNoaWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMTI0NTcwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Kim Kardashian" />
            <VStack align="start" spacing={6}>
              <Heading size="2xl">Kim Kardashian</Heading>
              <Text fontSize="xl" maxW="sm">
                Entrepreneur, TV Personality, Influencer
              </Text>
            </VStack>
          </HStack>
        </Container>
      </Box>

      {/* Bio */}
      <Box py={20}>
        <Container maxW="container.lg">
          <VStack align="start" spacing={6}>
            <Heading size="xl">About Kim</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra malesuada felis, in lacinia odio rhoncus eget. Nulla facilisi. Etiam eget mauris eros. Sed luctus massa vel augue maximus, in scelerisque lectus aliquam.</Text>
            <Text>Donec tincidunt urna a ligula vestibulum placerat. Suspendisse at ultricies nisl, quis vehicula purus. Quisque faucibus urna massa, vitae imperdiet sapien pretium vel. Curabitur vitae metus lorem.</Text>
          </VStack>
        </Container>
      </Box>

      {/* Social Links */}
      <Box py={10} bg="gray.50">
        <Container maxW="container.lg">
          <HStack justify="center" spacing={8}>
            <Link href="https://www.instagram.com/kimkardashian">
              <FaInstagram size={36} />
            </Link>
            <Link href="https://twitter.com/KimKardashian">
              <FaTwitter size={36} />
            </Link>
            <Link href="https://www.facebook.com/KimKardashian">
              <FaFacebook size={36} />
            </Link>
          </HStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <Divider mb={6} />
          <Text textAlign="center">&copy; 2023 Kim Kardashian. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
