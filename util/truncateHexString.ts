export function truncateHexString(hexString: string, length: number) {
  if (hexString.length <= length) {
    return hexString;
  } else {
    return hexString.slice(0, length) + "...";
  }
}
