'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export default function Header() {
 return (
  <nav className="fixed left-0 top-0 z-50 w-full bg-white shadow-md dark:bg-gray-900">
   <div className="container mx-auto flex items-center justify-between p-4">
    <Link href="/" className="text-xl font-bold">
     LOGO
    </Link>

    <div className="space-x-6">
     <Button asChild variant="ghost" size="icon">
      <Link href="https://github.com/minoong" target="_blank">
       <Github className="size-[1.2rem]" />
      </Link>
     </Button>
    </div>
   </div>
  </nav>
 );
}
