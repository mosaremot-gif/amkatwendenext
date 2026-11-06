export function findNullByteField(value: unknown): string | undefined {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return undefined;
  }

  for (const [field, fieldValue] of Object.entries(value)) {
    if (typeof fieldValue === "string" && fieldValue.includes("\0")) {
      return field;
    }
  }

  return undefined;
}
