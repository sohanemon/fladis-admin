import Image from 'next/image';

export default function Brand({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src={`/assets/images/logo.svg`}
      alt=''
      width={60}
      height={60}
    />
  );
}
