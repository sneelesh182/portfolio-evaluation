
import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Stack,
  Text,
  Heading,
  Card,
  CardBody,
  Box,
  CardHeader,
  StackDivider
} from '@chakra-ui/react'
export const DrawerExample=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Logo Here</DrawerHeader>

          <DrawerBody>
          <Card>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Home
        </Heading>
      
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Schedule
        </Heading>
        
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Recommendations
        </Heading>
       
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Analytics
        </Heading>
       
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Profile
        </Heading>
       
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Inbox
        </Heading>
       
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Themes
        </Heading>
       
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Settings
        </Heading>
       
      </Box>
      
    </Stack>
  </CardBody>
</Card>
          </DrawerBody>

         
        </DrawerContent>
      </Drawer>
    </>
  )
}