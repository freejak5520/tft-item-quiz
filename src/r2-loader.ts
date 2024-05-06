export default function r2Loader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  return `https://items-cdn.zvdev.com${src}`;
}
