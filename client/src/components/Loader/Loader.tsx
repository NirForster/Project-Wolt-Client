import "./Loader.css";

interface LoaderProps {
  bgColor: string;
}

export default function Loader({ bgColor }: LoaderProps) {
  return (
    <div
      className="loader"
      style={{ "--bg-color": bgColor } as React.CSSProperties}
    ></div>
  );
}
