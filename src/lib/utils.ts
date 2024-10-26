import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseGoogleDriveLink(link: string): string {
  const match = link.match(/\/d\/(.*?)\//);

  return match && match[1] ? `https://lh3.google.com/u/0/d/${match[1]}=w1920-h925-iv1` : "";
}
