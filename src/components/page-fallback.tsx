import { Loader } from "lucide-react";

/**
 * Fallback shown while a lazily-loaded route chunk is fetched. Kept minimal and
 * centered so it doesn't cause layout shift inside the app shell.
 */
const PageFallback = () => (
  <div className="flex flex-1 items-center justify-center py-20">
    <Loader className="h-6 w-6 animate-spin text-muted-foreground" />
  </div>
);

export default PageFallback;
