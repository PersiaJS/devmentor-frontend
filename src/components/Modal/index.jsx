import {
  ModalOverlay,
  Button,
  ModalFooter,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Modal,
  Divider,
} from "@chakra-ui/react";

export function FilterModal({ isOpen, onClose, overlay, children }) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} fontFamily="Vazir">
      {overlay}
      <ModalContent>
        <ModalHeader
          fontWeight="bold"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          فیلترها
        </ModalHeader>
        <Divider />
        <ModalCloseButton />
        <ModalBody my={5}>{children}</ModalBody>
        <Divider />
        <ModalFooter>
          <Button
            onClick={onClose}
            fontWeight="bold"
            backgroundColor="blue.500"
            color="white"
            fontSize="lg"
          >
            اعمال فیلتر
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
