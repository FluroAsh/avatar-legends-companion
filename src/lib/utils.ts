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

export const getInitials = (
  firstName?: null | string,
  lastName?: null | string
) => (firstName && lastName ? `${firstName[0]}${lastName[0]}` : "N/A")

async function fetchPlaybook(playbook: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/classes?type=${playbook || "bold"}`
  )
  return await res.json()
}

export { fetchPlaybook }
