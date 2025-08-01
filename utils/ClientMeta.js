"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import generateMeta from "@/utils/MetaGenerator";

export default function ClientMeta() {
  const pathname = usePathname();

  useEffect(() => {
    const meta = generateMeta(pathname);
    document.title = meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = meta.description;
      document.head.appendChild(newMetaDescription);
    }

    // Tracking page view for Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('config', process.env.NEXT_PUBLIC_GOOGLE_GTAG, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
