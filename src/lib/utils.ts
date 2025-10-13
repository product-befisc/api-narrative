import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function maskData(value: string | undefined, showData: boolean): string {
  if (!value || showData) return value || '';
  const length = value.length;
  if (length <= 4) return '•'.repeat(length);
  return '•'.repeat(length - 4) + value.slice(-4);
}

export function maskEmail(email: string | undefined, showData: boolean): string {
  if (!email || showData) return email || '';
  const [local, domain] = email.split('@');
  if (!domain) return '•'.repeat(email.length);
  return local.slice(0, 2) + '•'.repeat(local.length - 2) + '@' + domain;
}

export function maskPhone(phone: string | undefined, showData: boolean): string {
  if (!phone || showData) return phone || '';
  return '•'.repeat(phone.length - 4) + phone.slice(-4);
}
