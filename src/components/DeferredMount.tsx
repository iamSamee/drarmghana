import { useEffect, useRef, useState, type ReactNode } from "react";

// Defers mounting `children` (and therefore any React.lazy() imports inside
// them) until the wrapper scrolls near the viewport. Plain React.lazy alone
// only code-splits the bundle — the import() still fires as soon as React
// tries to render it, which for content mounted unconditionally on page load
// means immediately, competing with the hero image for main-thread time and
// delaying LCP. Gating on IntersectionObserver defers that work until it's
// actually needed.
export const DeferredMount = ({
  children,
  rootMargin = "800px",
}: {
  children: ReactNode;
  rootMargin?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldRender, rootMargin]);

  return <div ref={ref}>{shouldRender ? children : null}</div>;
};
