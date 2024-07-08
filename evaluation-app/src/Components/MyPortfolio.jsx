import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRadialGradient, setSolid } from "../Redux/Action";
import { setLinearGradient } from "../Redux/Action";
import {
  Heading,
  Flex,
  Text,
  Stack,
  Card,
  CardHeader,
  CardBody,
  Button,
  StackDivider,
  Box,
  Image,
  background,
} from "@chakra-ui/react";

import { useState } from "react";
export const MyPortfolio = () => {

  

  const dispatch = useDispatch();
  const [direction, setDirection] = useState("to-r");
  const {
    solidColor,
    linearGradientValue1,
    linearGradientValue2,
    radialGradientValue1,
    radialGradientValue2,
  } = useSelector((store) => store.portfolio);
  const Lineargradient = `linear(${direction},${linearGradientValue1},${linearGradientValue2})`;
  const RadialGradient = `radial(${radialGradientValue1} , ${radialGradientValue2})`;

  // bg={solidColor}
  let bgStyle={}

  if(solidColor){
    bgStyle={backgroundColor:solidColor}

  }
  const handleSolid = (value) => {
    dispatch(setSolid(value));
  };
  const handleLinearGradient = (value1, value2) => {
    dispatch(setLinearGradient(value1, value2));
  };
  const handleRadialGradient = (value1, value2) => {
    dispatch(setRadialGradient(value1, value2));
  };
  return (
    <div>
      
      <Flex align={"center"} justify={"space-between"}>
        <Heading size={"md"}>Themes</Heading>
        <Flex>
          <Text>Kushagra Singh</Text>
        </Flex>
      </Flex>

      <Stack spacing="4">
        <Card>
          <CardBody>
            <Flex align={"center"} justify={"space-between"}>
              <Heading size={"sm"}>Apply a skin tour profile</Heading>
              <Flex>
                <Stack direction="row" spacing={4} align="center">
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid",
                    }}
                    variant="solid"
                  >
                    + Custom
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "black",
                      color: "white",
                    }}
                    variant="outline"
                  >
                    Save
                  </Button>
                </Stack>
              </Flex>
            </Flex>{" "}
          </CardBody>
        </Card>
      </Stack>
      <Flex justify={"space-evenly"}>
        <Card>
          <CardHeader></CardHeader>

          <CardBody align="left">
            <Stack divider={<StackDivider />} spacing="4">
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Heading align="left" size="md">
                  Solids
                </Heading>

                <Stack
                  display={"flex"}
                  flexWrap={"wrap"}
                  spacing={4}
                  direction="row"
                  align="center"
                >
                  <Button
                    onClick={() => {
                      handleSolid("black");
                    }}
                    bgColor={"black"}
                    size="xs"
                  ></Button>
                  <Button
                    onClick={() => {
                      handleSolid("grey");
                    }}
                    bgColor={"grey"}
                    size="xs"
                  ></Button>
                  <Button
                    onClick={() => {
                      handleSolid("cyan");
                    }}
                    bgColor={"cyan"}
                    size="xs"
                  ></Button>
                  <Button
                    onClick={() => {
                      handleSolid("yellow");
                    }}
                    bgColor={"yellow"}
                    size="xs"
                  ></Button>
                  <Button
                    onClick={() => {
                      handleSolid("blue");
                    }}
                    bgColor={"blue"}
                    size="xs"
                  ></Button>
                  <Button
                    onClick={() => {
                      handleSolid("red");
                    }}
                    bgColor={"red"}
                    size="xs"
                  ></Button>
                </Stack  >
              </Box>
              <Box>
                <Heading align="left" size="md">
                  Linear Gradient
                </Heading>

                <Stack  display={"flex"}
                  flexWrap={"wrap"}
                  spacing={4}
                  direction="row"
                  align="center">
                  <Button
                    onClick={() => {
                      handleLinearGradient("red", "black");
                    }}
                    style={{
                      background: "linear-gradient(red,black)",
                    }}
                    size="xs"
                  ></Button>
                  <Button
                    onClick={() => {
                      handleLinearGradient("blue", "yellow");
                    }}
                    style={{
                      background: "linear-gradient(blue,yellow)",
                    }}
                    size="xs"
                  ></Button>
                  <Button
                    onClick={() => {
                      handleLinearGradient("white", "red");
                    }}
                    style={{
                      background: "linear-gradient(white,red)",
                    }}
                    size="xs"
                  ></Button>
                  <Button
                    onClick={() => {
                      handleLinearGradient("orange", "pink");
                    }}
                    style={{
                      background: "linear-gradient(orange,pink)",
                    }}
                    size="xs"
                  ></Button>
                  <Button
                    onClick={() => {
                      handleLinearGradient("teal", "white");
                    }}
                    style={{
                      background: "linear-gradient(teal,white)",
                    }}
                    size="xs"
                  ></Button>
                  <Button
                    onClick={() => {
                      handleLinearGradient("burlywood", "red");
                    }}
                    style={{
                      background: "linear-gradient(burlywood,red)",
                    }}
                    size="xs"
                  ></Button>
                </Stack>
              </Box>
              <Box>
                <Heading align="left" size="md">
                  Radial Gradients
                </Heading>

                <Stack  display={"flex"}
                  flexWrap={"wrap"}
                  spacing={4}
                  direction="row"
                  align="center">
                  <Button
                    onClick={() => {
                      handleRadialGradient("teal", "white");
                    }}
                    style={{
                      background: "radial-gradient(teal,white)",
                    }}
                    size="xs"
                  ></Button>
                  <Button
                    onClick={() => {
                      handleRadialGradient("blue", "white");
                    }}
                    style={{
                      background: "radial-gradient(blue,white)",
                    }}
                    size="xs"
                  ></Button>
                  <Button
                    onClick={() => {
                      handleRadialGradient("beige", "black");
                    }}
                    style={{
                      background: "radial-gradient(beige,black)",
                    }}
                    size="xs"
                  ></Button>
                  <Button
                    onClick={() => {
                      handleRadialGradient("orange", "red");
                    }}
                    style={{
                      background: "radial-gradient(orange,red)",
                    }}
                    size="xs"
                  ></Button>
                  <Button
                    onClick={() => {
                      handleRadialGradient("olive", "white");
                    }}
                    style={{
                      background: "radial-gradient(olive,white)",
                    }}
                    size="xs"
                  ></Button>
                  <Button
                    onClick={() => {
                      handleRadialGradient("tan", "teal");
                    }}
                    style={{
                      background: "radial-gradient(tan,teal)",
                    }}
                    size="xs"
                  ></Button>
                </Stack>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Card  bg={solidColor}  bgGradient={Lineargradient || RadialGradient} minH='100vh'>
          <CardHeader>
            <Image
              w="100%"
              h='100px'
              objectFit={'cover'}
              src="data:image/jpeg;base64,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"
              alt="Dan Abramov"
            />
            <Image
              style={{
                width:'100px',
                borderRadius: "100%",
                position: "relative",
              }}
              w="100%"
              src="data:image/jpeg;base64,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"
              alt="Dan Abramov"
            />
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <Heading size="sm" align="left" textTransform="uppercase">
                  Mason Parker
                </Heading>
                <Heading size="sm" align="left">
                  Graphivs & UI/UX Designer
                </Heading>
                <Text align={"left"} size="md">
                  Denver, United States
                </Text>
                <Card>
                  <CardBody>
                    <Text>
                      I am a visonary Graphics and UI/UX Designer, seamlessly
                      blending artistic flair with technical expertise.
                    </Text>
                  </CardBody>
                </Card>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </div>
  );
};
