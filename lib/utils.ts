import { HomePage } from "@/sanity.types";
import { buildFileUrl, parseAssetId } from "@sanity/asset-utils";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getResumeURL(resumePdf: HomePage["resumePdf"]) {
  if (!resumePdf?.asset?._ref) return null;
  const parts = parseAssetId(resumePdf.asset._ref);
  const url = buildFileUrl(parts, {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  });
  return url;
}
