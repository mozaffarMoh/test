interface EmojieProps {
  icon: any;
  color?: string;
  size?: number;
}
export default function Emoji({
  icon,
  color = "default",
  size = 24,
}: EmojieProps) {
  if (!icon) return null;

  return (
    <span
      dangerouslySetInnerHTML={{ __html: icon }}
      style={{ color: color, fontSize: `${size}px`, margin: "4px" }}
    />
  );
}
