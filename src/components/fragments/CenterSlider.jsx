"use client";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SliderBackground from "@/components/fragments/SliderBackground";
import { Box, Flex, Image } from "@chakra-ui/react";

function CenterSlider({ dir }) {
  const settings = {
    arrows: false,
    type: "loop",
    speed: 1200,
    perPage: 1,
    width: "13.5rem",
    height: "24.5rem",
    perMove: 1,
    pagination: false,
    autoplay: true,
    interval: 3000,
    gap: "3rem",
    direction: dir,
  };
  return (
    <>
      <Flex
        position={"relative"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box position={"absolute"} w={"14rem"} h={"26rem"}>
          <SliderBackground />
        </Box>
        <Box as={Splide} options={settings}>
          <Box as={SplideSlide} borderRadius={"50px"}>
            <Image
              src="banner_mockup_1.png"
              w={"12.5rem"}
              h={"24.5rem"}
              mx={"auto"}
            />
          </Box>
          <Box as={SplideSlide} borderRadius={"50px"}>
            <Image
              src="banner_mockup_2.png"
              w={"12.5rem"}
              h={"24.5rem"}
              mx={"auto"}
            />
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default CenterSlider;
