import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Aspect ratio class applied to the skeleton, e.g. "aspect-[4/5]". Defaults to "aspect-square" */
  aspectClass?: string;
  /** Extra classes for the skeleton shimmer overlay */
  skeletonClassName?: string;
}

/**
 * Drops in wherever you'd use <img>.
 * Shows a shimmering skeleton placeholder while the image is loading,
 * then fades the image in once it's ready.
 */
const ImageWithSkeleton = ({
  src,
  alt,
  className,
  aspectClass = "aspect-square",
  skeletonClassName,
  ...rest
}: ImageWithSkeletonProps) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Skeleton shimmer — visible until image loads */}
      {!loaded && !errored && (
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 overflow-hidden rounded-[inherit]",
            skeletonClassName
          )}
        >
          {/* Base muted layer */}
          <div className="absolute inset-0 bg-muted" />
          {/* Travelling shimmer wave */}
          <div className="absolute inset-0 skeleton-shimmer" />
        </div>
      )}

      {/* Actual image — hidden until loaded */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => { setLoaded(true); setErrored(true); }}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...rest}
      />
    </div>
  );
};

export default ImageWithSkeleton;
