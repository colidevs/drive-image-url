"use client";

import {useRef, useState} from "react";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {cn, parseGoogleDriveLink} from "@/lib/utils";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {Skeleton} from "@/components/ui/skeleton";
import {useToast} from "@/hooks/use-toast";

export default function HomePage() {
  const [url, setUrl] = useState("");
  const {toast} = useToast();
  const imgRef = useRef<HTMLImageElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const disabled = url === "";

  const Toast = (title: string) => toast({title, duration: 3000, className: "border-muted"});

  const handleClickTake = (url?: string) => {
    if (!url) {
      Toast("❌ Please enter a link");

      return;
    }

    const link = parseGoogleDriveLink(url);

    if (!link) {
      Toast("❌ Invalid link");

      return;
    }

    imgRef.current?.setAttribute("src", link);

    inputRef.current!.value = "";

    cpy(link);

    setUrl(link);

    Toast("Copied! ✅");
  };

  const cpy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="m-auto flex max-w-xl flex-col space-y-4 py-20">
      <aside className="relative flex-grow rounded-lg">
        {disabled ? <Skeleton className="absolute left-0 top-0 z-10 h-full w-full" /> : null}
        <AspectRatio ratio={1}>
          <img
            ref={imgRef}
            alt={url}
            className={cn("size-full object-cover", disabled ? "hidden" : "visible")}
            src=""
          />
        </AspectRatio>
      </aside>
      <section className="space-y-4">
        <Input ref={inputRef} placeholder="Your google drive url" />
        <Button
          className={cn("w-full bg-blue-600/70 text-foreground hover:bg-blue-600")}
          onClick={() => handleClickTake(inputRef.current?.value)}
        >
          Take your image link 📸
        </Button>
      </section>
    </section>
  );
}
