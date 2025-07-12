"use client";
import Group from "@/components/Group";
import Stack from "@/components/Stack";
import Image from "next/image";

export default function Home() {
  return (
    <Stack className="w-screen h-screen bg-black">
      <Group className="w-full">
        <span className="text-2xl">Text 1</span>
        <span className="text-2xl">Text 2</span>
        <span className="text-2xl">Text 3</span>
      </Group>
    </Stack>
  );
}
