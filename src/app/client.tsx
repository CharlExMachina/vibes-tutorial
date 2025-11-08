"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Client = () => {
  const trpc = useTRPC();
  const {
    data: { greeting },
  } = useSuspenseQuery(trpc.hello.queryOptions({ text: "Carlos" }));

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-lg font-bold">{greeting}</h1>
      <Button variant="destructive">Press me!</Button>
    </div>
  );
};
