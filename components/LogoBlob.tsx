export default function LogoBlob({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" role="img" aria-label="ÖKA logotyp" xmlns="http://www.w3.org/2000/svg">
      <path d="M63 8c10 3 18 12 20 22 2 10-1 22-9 30s-20 12-31 11-22-7-28-17-6-22 0-31S34 6 44 7s9-1 19 1Z" fill="#0A0A0A" />
    </svg>
  );
}
