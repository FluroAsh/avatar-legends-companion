import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Sanitizes a slug string by removing any characters that are not alphanumeric,
 * hyphens, or underscores.
 */
export function sanitizeSlug(string: string) {
  return string.replace(/[^a-zA-Z0-9-_]/g, "")
}
