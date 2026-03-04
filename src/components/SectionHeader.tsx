"use client";

// Simple section header shared across the LIGNOIR site for consistent spacing.
// Keeping this in a dedicated component avoids copy/paste when changing font sizes,
// adding action links, etc.

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  actionText?: string;
  actionHref?: string;
}

export default function SectionHeader({ subtitle = "", title, actionText, actionHref }: SectionHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <div>
        {subtitle && (
          <span className="text-gold text-sm tracking-widest uppercase font-medium block mb-2">
            {subtitle}
          </span>
        )}
        <h2 className="font-serif text-3xl md:text-4xl text-gold">
          {title}
        </h2>
      </div>
      {actionText && actionHref && (
        <Link
          href={actionHref}
          className="text-gold hover:text-gold-light border-b border-gold pb-1 transition-colors flex items-center gap-2 group"
        >
          {actionText}
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
