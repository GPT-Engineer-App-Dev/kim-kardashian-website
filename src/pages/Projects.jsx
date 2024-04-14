import { Box, VStack, Heading, Text, Image, Container, Grid, GridItem, Card, CardBody } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <Box>
      <Navbar />

      <Box py={20}>
        <Container maxW="container.lg">
          <VStack align="start" spacing={12}>
            <Heading size="2xl">Projects</Heading>
            
            <VStack align="start" spacing={8}>
              <Heading size="xl">Fashion</Heading>
              <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                <GridItem>
                  <Card>
                    <CardBody>
                      <Image src='https://via.placeholder.com/300x200' alt='SKIMS' borderRadius='lg' />
                      <Heading size='md' my={2}>SKIMS</Heading>
                      <Text>Shapewear and loungewear line</Text>
                    </CardBody>
                  </Card>  
                </GridItem>
              </Grid>
            </VStack>

            <VStack align="start" spacing={8}>
              <Heading size="xl">Beauty</Heading>
              <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                <GridItem>
                  <Card>
                    <CardBody>
                      <Image src='https://via.placeholder.com/300x200' alt='KKW Beauty' borderRadius='lg' />
                      <Heading size='md' my={2}>KKW Beauty</Heading>
                      <Text>Cosmetics line</Text>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card>
                    <CardBody>
                      <Image src='https://via.placeholder.com/300x200' alt='KKW Fragrance' borderRadius='lg' />
                      <Heading size='md' my={2}>KKW Fragrance</Heading>
                      <Text>Fragrance line</Text>
                    </CardBody>
                  </Card>
                </GridItem>
              </Grid>
            </VStack>

            <VStack align="start" spacing={8}>
              <Heading size="xl">Entertainment</Heading>
              <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                <GridItem>
                  <Card>
                    <CardBody>
                      <Image src='https://via.placeholder.com/300x200' alt='Keeping Up With The Kardashians' borderRadius='lg' />
                      <Heading size='md' my={2}>Keeping Up With The Kardashians</Heading>
                      <Text>Reality TV show</Text>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card>
                    <CardBody>
                      <Image src='https://via.placeholder.com/300x200' alt='Kim Kardashian: Hollywood' borderRadius='lg' />
                      <Heading size='md' my={2}>Kim Kardashian: Hollywood</Heading>
                      <Text>Mobile game</Text>
                    </CardBody>
                  </Card>
                </GridItem>
              </Grid>
            </VStack>

            <VStack align="start" spacing={8}>
              <Heading size="xl">Endorsements</Heading>
              <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                <GridItem>
                  <Card>
                    <CardBody>
                      <Image src='https://via.placeholder.com/300x200' alt='Sketchers' borderRadius='lg' />
                      <Heading size='md' my={2}>Sketchers</Heading>
                      <Text>Shoe brand endorsement</Text>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card>
                    <CardBody>
                      <Image src='https://via.placeholder.com/300x200' alt="Carl's Jr" borderRadius='lg' />
                      <Heading size='md' my={2}>Carl's Jr</Heading>
                      <Text>Fast food chain endorsement</Text>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card>
                    <CardBody>
                      <Image src='https://via.placeholder.com/300x200' alt='Charmin' borderRadius='lg' />
                      <Heading size='md' my={2}>Charmin</Heading>
                      <Text>Toilet paper brand endorsement</Text>
                    </CardBody>
                  </Card>
                </GridItem>
              </Grid>
            </VStack>

          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Projects;