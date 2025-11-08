import { useEffect, useRef, useState, type HTMLAttributes } from "react";
import WaveReveal from "@/components/animata/text/wave-reveal";
import { cn } from "@/lib/utils";

// ────────────────────────────────────────────────
// Types
// ────────────────────────────────────────────────
interface ImageItem {
  image: string;
  title: string;
}

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: ImageItem;
  index: number;
  activeItem: number;
  isMobile?: boolean;
}

interface ExpandableProps {
  list?: ImageItem[];
  autoPlay?: boolean;
  className?: string;
}

// ────────────────────────────────────────────────
// Item Component
// ────────────────────────────────────────────────
const ListItem = ({ item, index, activeItem, isMobile, ...props }: ImageProps) => {
  const isActive = index === activeItem;

  return (
    <div
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-md transition-all duration-300 ease-in-out",
        isMobile
          ? "w-full mb-4 h-[82vh]" // Mobile: stacked layout
          : "h-[82vh] w-full transition-all flex-shrink-0",
        !isMobile && (isActive ? "flex-grow w-auto" : "w-20 min-w-10")
      )}
      {...props}
    >
      <img
        src={item.image}
        alt={item.title}
        className={cn(
          "object-cover w-full h-full transition-all duration-300",
          !isMobile && !isActive && "blur-[2px]"
        )}
      />

      <div className="absolute bottom-4 left-4 text-white">
        <WaveReveal
          duration="1000ms"
          text={item.title}
          direction="down"
          className={cn("text-xl sm:text-2xl md:text-6xl", isMobile && "w-full text-center")}
        />
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────
// Default Items
// ────────────────────────────────────────────────
const defaultItems: ImageItem[] = [
  {
    image:
      "https://images.unsplash.com/photo-1541753236788-b0ac1fc5009d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Mountains",
  },
  {
    image:
      "https://images.unsplash.com/photo-1718027808460-7069cf0ca9ae?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Great Wall of China",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584968173934-bc0b588eb806?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Texture & Patterns",
  },
];

// ────────────────────────────────────────────────
// Main Component
// ────────────────────────────────────────────────
export default function Expandable({
  list = defaultItems,
  autoPlay = true,
  className,
}: ExpandableProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();

    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  // Auto-play rotation
  useEffect(() => {
    if (!autoPlay || isMobile) return;

    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % list.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, list.length, isHovering, isMobile]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "transition-all duration-300",
        isMobile
          ? "flex flex-col w-full h-[92vh]"
          : "flex items-center w-[80vw] h-[92vh] gap-4",
        className
      )}
    >
      {list.map((item, index) => (
        <ListItem
          key={item.title}
          item={item}
          index={index}
          activeItem={activeItem}
          isMobile={isMobile}
          onMouseEnter={() => !isMobile && (setActiveItem(index), setIsHovering(true))}
          onMouseLeave={() => !isMobile && setIsHovering(false)}
        />
      ))}
    </div>
  );
}
