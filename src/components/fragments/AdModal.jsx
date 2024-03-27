"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
} from "@chakra-ui/react";
import FramerButton from "../motion/FramerButton";
export default function AdModal({ download }) {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnEsc={false}
        closeOnOverlayClick={false}
        allowPinchZoom={true}
      >
        <ModalOverlay backdropFilter="blur(3px)" />
        <ModalContent bg={"#ffeedb"} borderRadius={15} w={"90%"}>
          <ModalCloseButton marginStart={0} position={"block"} mx={2} mt={2} />
          <ModalBody>
            <Image src="gift.svg" mx={"auto"} w={400} />
          </ModalBody>

          <ModalFooter justifyContent={"center"}>
            <FramerButton
              child={
                <Button
                  bg={"secondary.100"}
                  color={"primary.500"}
                  variant={"withShadow"}
                  size={{ base: "sm", md: "md" }}
                >
                  {download}
                </Button>
              }
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
