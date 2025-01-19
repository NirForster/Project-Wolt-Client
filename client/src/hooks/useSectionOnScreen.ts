import { useEffect, useMemo, useState, useCallback } from "react";

export default function useSectionOnScreen(
  options: IntersectionObserverInit,
  sectionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>,
  firstSectionTitle: string
): string {
  const [currentSectionTitle, setCurrentSectionTitle] =
    useState<string>(firstSectionTitle);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSectionTitle(
            entry.target.getAttribute("data-section-title") || firstSectionTitle
          );
        }
      });
    }, options);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [options, sectionRefs, firstSectionTitle]);

  return currentSectionTitle;
}
