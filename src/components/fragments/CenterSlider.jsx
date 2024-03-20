import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SliderBackground from "@/components/fragments/SliderBackground";
import { Box, Flex, Image } from "@chakra-ui/react";

export default function CenterSlider({ dir }) {
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
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <Box as={SplideSlide} key={index} borderRadius={"50px"}>
                <Image
                  src={`slider_mockup_${index + 1}.png`} // Use index + 1 for 1-based indexing
                  w={"12.5rem"}
                  h={"24.5rem"}
                  mx={"auto"}
                />
              </Box>
            ))}
        </Box>
      </Flex>
    </>
  );
}
