import { Box, VStack, Heading, Text, Image, Container, SimpleGrid, Stack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Events = () => {
  return (
    <Box>
      <Navbar />

      <Container maxW="container.lg" py={12}>
        <Stack spacing={12}>
          <VStack align="start" spacing={6}>
            <Heading size="2xl">Upcoming Events</Heading>
            <Box borderWidth={1} borderRadius="lg" p={6}>
              <Heading size="lg">Event 1</Heading>
              <Text fontSize="md">Date: MM/DD/YYYY</Text>
              <Text fontSize="md">Time: HH:MM AM/PM</Text>
              <Text fontSize="md">Location: Event Venue</Text>
              <Text mt={2}>Brief description of the event.</Text>
            </Box>
            {}
          </VStack>

          <VStack align="start" spacing={6}>
            <Heading size="2xl">Past Events</Heading>
            <Box p={6}>
              <SimpleGrid columns={[2, 3, 4]} spacing={4}>
                <Image src="https://via.placeholder.com/150" alt="Event 1" />
                <Image src="https://via.placeholder.com/150" alt="Event 2" />
                {}
              </SimpleGrid>
            </Box>
          </VStack>
        </Stack>
      </Container>

      <Footer />
    </Box>
  );
};

export default Events;
