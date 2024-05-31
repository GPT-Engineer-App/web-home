import { Container, VStack, Box, Text, Heading, Image, IconButton, Link, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box boxSize="150px">
          <Image borderRadius="full" src="https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHBlcnNvbnxlbnwwfHx8fDE3MTcxMTg2NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" />
        </Box>
        <Heading as="h1" size="2xl">
          John Doe
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Full Stack Developer | JavaScript Enthusiast | Open Source Contributor
        </Text>
        <HStack spacing={4}>
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </Link>
          <Link href="https://twitter.com/johndoe" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
