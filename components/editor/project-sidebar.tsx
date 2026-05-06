"use client";

import { X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Floating sidebar that slides in from the left above the editor canvas.
 *
 * Does not push page content — uses fixed positioning with a slide-in animation.
 * Contains tabs for "My Projects" and "Shared" with empty placeholder states.
 */
export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      {/* Backdrop — dims the canvas when sidebar is open */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-200",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Sidebar panel */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-72 border-r border-border-default bg-bg-surface transition-transform duration-200 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-label="Project sidebar"
      >
        {/* Header */}
        <div className="flex h-12 items-center justify-between border-b border-border-default px-3">
          <h2 className="text-sm font-medium text-text-primary">Projects</h2>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X className="size-4" />
          </Button>
        </div>

        {/* Tabs content area */}
        <div className="flex h-[calc(100%-3rem)] flex-col">
          <Tabs defaultValue="my-projects" className="flex flex-1 flex-col">
            <div className="border-b border-border-default px-3 pt-3">
              <TabsList className="w-full">
                <TabsTrigger value="my-projects" className="flex-1">
                  My Projects
                </TabsTrigger>
                <TabsTrigger value="shared" className="flex-1">
                  Shared
                </TabsTrigger>
              </TabsList>
            </div>

            {/* My Projects tab — empty state */}
            <TabsContent value="my-projects" className="flex-1">
              <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                <p className="text-sm text-text-muted">
                  No projects yet
                </p>
                <p className="mt-1 text-xs text-text-faint">
                  Create a new project to get started
                </p>
              </div>
            </TabsContent>

            {/* Shared tab — empty state */}
            <TabsContent value="shared" className="flex-1">
              <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                <p className="text-sm text-text-muted">
                  No shared projects
                </p>
                <p className="mt-1 text-xs text-text-faint">
                  Projects shared with you will appear here
                </p>
              </div>
            </TabsContent>
          </Tabs>

          {/* New Project button — fixed at bottom */}
          <div className="border-t border-border-default p-3">
            <Button variant="default" className="w-full gap-2">
              <Plus className="size-4" />
              New Project
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
