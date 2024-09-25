import { RefObject, useEffect } from 'react';

export function useCloseByOutsideClick(ref: RefObject<HTMLElement>, fn: (event: Event) => void) {
  // const ref = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const el = ref?.current;
      if (event instanceof MouseEvent) {
        const x = event?.offsetX || 0;
        const width = window?.innerWidth - 18;
        if (x >= width) {
          return;
        }
      }
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }
      fn(event);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, fn]);
}
