"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

/**
 * Fixed-height top navbar that frames every editor screen.
 *
 * Layout: left (sidebar toggle) | center (reserved) | right (reserved).
 * Uses semantic CSS tokens from globals.css for dark theme compatibility.
 */
export function EditorNavbar({ sidebarOpen, onToggleSidebar }: EditorNavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex h-12 items-center justify-between border-b border-border-default bg-bg-surface px-3">
      {/* Left — sidebar toggle */}
      <div>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onToggleSidebar}
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {sidebarOpen ? (
            <PanelLeftClose className="size-4" />
          ) : (
            <PanelLeftOpen className="size-4" />
          )}
        </Button>
      </div>

      {/* Center — reserved for future content (e.g., project title, breadcrumbs) */}
      <div />

      {/* Right — reserved for future actions (e.g., share, settings) */}
      <div />
    </nav>
  );
}
