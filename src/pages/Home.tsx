import { Box, Heading, Center, Accordion, VStack, Icon } from "@chakra-ui/react";
import { GiBrain, Gi3dStairs, GiPencilRuler, GiMoneyStack } from "react-icons/gi";
import { ThreeDMarquee } from '../components/ui/shadcn-io/3d-marquee';
import SpinCard from '../components/spincard/spincard';
// @ts-ignore: no declaration file for '../assets/images'
import imagearray from '../assets/images';
import type { JSX } from "react";


const items = [
  {
    value: "Strategy",
    icon: <GiBrain />,
    title: "Strategy",
    content: "We start with your goals, building a clear plan to grow your online presence and attract the correct audience.",
  },
  {
    value: "Design",
    icon: <GiPencilRuler />,
    title: "Design",
    content: "Clean, modern, and mobile-ready designs that showcase your brand and make a great first impression.",
  },
  {
    value: "Development",
    icon: <Gi3dStairs />,
    title: "Development",
    content: "Robust and scalable development. Optimized for performance, maintainability, and SEO.",
  },
  {
    value: "Growth",
    icon: <GiMoneyStack />,
    title: "Growth",
    content: "Ongoing support, updates, and digital marketing guidance to help your business keep growing online.",
  },
];

function hiLoop(count: number): JSX.Element[] {
  const components: JSX.Element[] = [];
  for (let i = 0; i < count; i++) {
    const fontSize = 18 - i * 4;
    const opacity = 1 - i * 0.16;
    components.push(
      <Heading key={i} paddingBottom={12} fontSize={`${fontSize}px`} opacity={opacity} color="white">
        Welcome
      </Heading>
    );
  }
  return components;
}

function Home() {
  return (
    <Box
      height="92vh"
      overflowY="scroll"
      css={{
        scrollbarWidth: "none",
        scrollBehavior: "smooth",
        scrollSnapType: "y mandatory",
        "&::-webkit-scrollbar": { display: "none" },
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#2f2f2f",
      }}
    >
      {/* Top welcome section */}
      <Center
        scrollSnapAlign="start"
        scrollSnapStop="normal"
        minHeight="92vh"
        flexDirection="column"
      >
        <SpinCard /> 
      </Center>

      {/* Marquee + Accordion section */}
      <Center
        scrollSnapAlign="start"
        scrollSnapStop="normal"
        flexDirection={["column", "row"]}
        minHeight="92vh"
        justifyContent="center"
        position="relative"
        width="100vw"
        overflow="hidden"
      >
        {/* Background + overlays */}
        <Box position="absolute" top={0} left={0} width="100%" height="100%" zIndex={0}>
          {/* 3D Marquee fills container */}
          <Box width="100%" height="100%">
            <ThreeDMarquee images={imagearray} />
          </Box>

          {/* Dark overlay */}
          <Box position="absolute" inset={0} bg="blackAlpha.800" zIndex={1} />

          {/* Top fade to page background */}
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="10vh"
            bgGradient="linear(to-b, #2f2f2f, transparent)"
            zIndex={2}
            pointerEvents="none"
          />

          {/* Bottom fade to page background */}
          <Box
            position="absolute"
            bottom={0}
            left={0}
            width="100%"
            height="10vh"
            bgGradient="linear(to-t, #2f2f2f, transparent)"
            zIndex={2}
            pointerEvents="none"
          />
        </Box>

        {/* Foreground Accordion */}
        <VStack
          as="form"
          position="relative"
          zIndex={3}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width={["80vw", "80vw", "60vw"]}
        >
          <Accordion.Root collapsible defaultValue={["info"]}>
            {items.map((item) => (
              <Accordion.Item
                key={item.value}
                value={item.value}
                mb={6}
                display={["flex", "flex", "flex"]}
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Accordion.ItemTrigger marginBottom={6} justifyContent={"center"} gap={8}>
                  <Icon fontSize="3xl" color="#f8ffc5" cursor={"pointer"}>
                    {item.icon}
                  </Icon>
                  <Heading color="white" fontSize="2xl" cursor={"pointer"}>
                    {item.title}
                  </Heading>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent marginBottom={3} justifyContent={"center"}>
                  <Accordion.ItemBody textAlign="center" color="white">{item.content}</Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </VStack>
      </Center>
    </Box>
  );
}

export default Home;
