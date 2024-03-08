"use client";
import { motion } from "framer-motion";

export default function FramerButton({ child }) {
  return <motion.div whileTap={{ scale: "0.97" }}>{child}</motion.div>;
}
