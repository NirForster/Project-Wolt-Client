interface XbtnProps {
  onClose: () => void;
}

export default function Xbtn({ onClose }: XbtnProps) {
  return (
    <img
      src="/assets/photos/x-img.png"
      className="absolute rounded-full w-10 h-10 top-4 right-4 cursor-pointer"
      onClick={onClose}
    />
  );
}
