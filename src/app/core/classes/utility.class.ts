
export function isNull(object: any): boolean {
  return object === null;
}

export function isNullOrUndefined(object: any): boolean {
  return object === null || object === undefined;
}

export function isNullOrUndefinedOrEmpty(object: string | null): boolean {
  return object === null || object === undefined || cleanText(object) === '';
}

export function cleanText(text: string): string {
  if (isNullOrUndefined(text)) {
    return text;
  }

  text = text.trim();

  while (text.includes('  ')) {
    text = text.replace('  ', ' ');
  }

  return text.trim();
}