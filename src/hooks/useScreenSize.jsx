"use client";
import { useBreakpointValue } from "@chakra-ui/react";

export function useScreenSize() {
  return useBreakpointValue({ base: true, lg: false });
}
