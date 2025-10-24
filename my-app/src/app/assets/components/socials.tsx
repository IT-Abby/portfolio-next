import Image from "next/image";

interface SocialProps {
  href: string;
  src: string;
  alt: string;
}

export default function Socials({ href, src, alt }: SocialProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition duration-300 border border-white/20"
    >
      <Image
        src={src}
        alt={alt}
        width={28}
        height={28}
        className="object-contain group-hover:scale-110 transition-transform duration-300"
      />
    </a>
  );
}
