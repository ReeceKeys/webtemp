import { Box, Button, Menu, Portal } from "@chakra-ui/react"
import { color } from "framer-motion";
import { LuChevronRight } from "react-icons/lu"


const MenuComponent = () => {
  return (
    <Menu.Root positioning={{ placement: "bottom" } } variant = 'subtle' size='md' >
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Explore
        </Button>
      </Menu.Trigger>
        <Box  mt="4" height="10vh" bg="gray.200" />
      <Portal>
        <Menu.Positioner>
          <Menu.Content  >
            <Menu.Item value="new-txt">New Text File</Menu.Item>
            <Menu.Item value="new-file">New File...</Menu.Item>
            <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
              <Menu.Separator/>
              <Menu.TriggerItem>
                Open Recent <LuChevronRight />
              </Menu.TriggerItem>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="panda">Panda</Menu.Item>
                    <Menu.Item value="ark">Ark UI</Menu.Item>
                    <Menu.Item value="chakra">Chakra v3</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            <Menu.Item value="open-file">Open File...</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
export default MenuComponent;