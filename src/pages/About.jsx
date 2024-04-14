import { Box, VStack, HStack, Heading, Text, Image, Container, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <Box>
      <Navbar />

      <Box py={20}>
        <Container maxW="container.lg">
          <HStack align="start" spacing={12}>
            <Image borderRadius="lg" boxSize="sm" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxraW0lMjBrYXJkYXNoaWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMTI0NTcwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Kim Kardashian Headshot" />
            <VStack align="start" spacing={8}>
              <Heading size="2xl">About Kim Kardashian</Heading>
              <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra malesuada felis, in lacinia odio rhoncus eget. Nulla facilisi. Etiam eget mauris eros. Sed luctus massa vel augue maximus, in scelerisque lectus aliquam. Donec tincidunt urna a ligula vestibulum placerat. Suspendisse at ultricies nisl, quis vehicula purus. Quisque faucibus urna massa, vitae imperdiet sapien pretium vel. Curabitur vitae metus lorem.</Text>
              <Text fontSize="lg">Sed luctus massa vel augue maximus, in scelerisque lectus aliquam. Donec tincidunt urna a ligula vestibulum placerat. Suspendisse at ultricies nisl, quis vehicula purus. Quisque faucibus urna massa, vitae imperdiet sapien pretium vel. Curabitur vitae metus lorem.</Text>
              <VStack spacing={4}>
                <Heading size="lg">Key Facts</Heading>
                <HStack spacing={12}>
                  <Stat>
                    <StatLabel>Instagram Followers</StatLabel>
                    <StatNumber>383M</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel>Twitter Followers</StatLabel>
                    <StatNumber>74.3M</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel>Facebook Followers</StatLabel>
                    <StatNumber>35.2M</StatNumber>
                  </Stat>
                </HStack>
              </VStack>
            </VStack>
          </HStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default About;
