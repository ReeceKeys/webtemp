import { useState, type JSX } from 'react'
import { Box, Heading, Center, VStack, Accordion, Icon, useMediaQuery } from '@chakra-ui/react';
import { LuChartBarStacked, LuTags } from "react-icons/lu"
import { BsPersonArmsUp } from "react-icons/bs";
import MenuComponent from './components/Menu';

const items = [
  {
    value: "about",
    icon: <BsPersonArmsUp  />,
    title: "about",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
  },
  {
    value: "info",
    icon: <LuTags />,
    title: "Product Info",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
  },
  
  {
    value: "stats",
    icon: <LuChartBarStacked />,
    title: "Stats",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
  },
  {
    value: "stats",
    icon: <LuChartBarStacked />,
    title: "Stats",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
  },
  {
    value: "stats",
    icon: <LuChartBarStacked />,
    title: "Stats",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
  },
]

function hiLoop(count: number): JSX.Element[] {
  const components: JSX.Element[] = [];

  for (let i = 0; i < count; i++) {
    const fontSize = 32 - i * 2; // decrease font size
    const opacity = 1 - i * 0.08; // decrease opacity

    components.push(
      <Heading
        key={i}
        fontSize={`${fontSize}px`}
        opacity={opacity}
        color="black"
      >
        Welcome
      </Heading>
    );
  }

  return components;
}

function App() {
  return (
    <Box height="100vh"
      overflowY="scroll"
      css={{
        scrollbarWidth: "none",
        scrollBehavior: "smooth",
        scrollSnapType: "y mandatory",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      >
    <Center scrollSnapAlign="start" scrollSnapStop="normal" minHeight='100vh' flexDirection='column' gap={4}>
    <MenuComponent />

    <VStack gap={6}>
        {hiLoop(6)}
      </VStack>

      




    </Center>
    <Center scrollSnapAlign="start" scrollSnapStop="normal" minHeight='100vh'>
        <VStack as="form" mt={8} width={["60vw", "60vw", "80vw"]}>
          <Accordion.Root collapsible defaultValue={["info"]}>
            {items.map((item) => (
              <Accordion.Item key={item.value} value={item.value}>
                <Accordion.ItemTrigger>
                  <Icon fontSize="lg" color="fg.subtle">
                    {item.icon}
                  </Icon>
                  <Heading fontSize="1xl">{item.title}</Heading>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody>{item.content}</Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </VStack>
        </Center>
    </Box>
    
  )

  
}

export default App
