'use client';
import { usePathname } from 'next/navigation';
import { Footer } from '@/components/sections/footer-section';

export default function FooterSwitch() {
  const pathname = usePathname();
  if (pathname?.startsWith('/countries')) return null;
  return <Footer />;
}
