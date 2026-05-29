import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
MousePointerClick,
  X,
  GraduationCap,
  HeartPulse,
  Cpu,
  Factory,
  ShoppingBag,
  BriefcaseBusiness,
  MoreHorizontal,
} from "lucide-react";

type QuickAction = {
  label: string;
  path: string;
  icon: React.ElementType;
};

type Position = {
  x: number;
  y: number;
};

const quickActions: QuickAction[] = [
  {
    label: "Education",
    path: "/services/education",
    icon: GraduationCap,
  },
  {
    label: "Healthcare",
    path: "/services/healthcare",
    icon: HeartPulse,
  },
  {
    label: "Information Technology",
    path: "/services/information-technology",
    icon: Cpu,
  },
  {
    label: "Manufacturing",
    path: "/services/manufacturing",
    icon: Factory,
  },
  {
    label: "Retail",
    path: "/services/retail",
    icon: ShoppingBag,
  },
  {
    label: "Consulting Services",
    path: "/services/consulting-services",
    icon: BriefcaseBusiness,
  },
  {
    label: "And many more",
    path: "/services",
    icon: MoreHorizontal,
  },
];

const FAB_SIZE = 64;
const SCREEN_GAP = 16;
const MOBILE_BOTTOM_NAV_HEIGHT = 76;
const MOBILE_BOTTOM_GAP = 20;
const ACTION_ICON_SIZE = 52;
const STORAGE_KEY = "visionaries-quick-actions-position";

const isMobileScreen = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
};

const getBottomSafeSpace = () => {
  return isMobileScreen()
    ? MOBILE_BOTTOM_NAV_HEIGHT + MOBILE_BOTTOM_GAP
    : SCREEN_GAP;
};

const getDefaultPosition = (): Position => {
  const bottomSafeSpace = getBottomSafeSpace();

  return {
    x: window.innerWidth - FAB_SIZE - SCREEN_GAP,
    y: window.innerHeight - FAB_SIZE - bottomSafeSpace,
  };
};

const clampPosition = (x: number, y: number): Position => {
  const bottomSafeSpace = getBottomSafeSpace();

  const minX = SCREEN_GAP;
  const minY = SCREEN_GAP;
  const maxX = window.innerWidth - FAB_SIZE - SCREEN_GAP;
  const maxY = window.innerHeight - FAB_SIZE - bottomSafeSpace;

  return {
    x: Math.max(minX, Math.min(x, maxX)),
    y: Math.max(minY, Math.min(y, maxY)),
  };
};

const QuickActions = () => {
  const navigate = useNavigate();

  const [showActions, setShowActions] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);

  const isDraggingRef = useRef(false);
  const positionRef = useRef(position);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  useEffect(() => {
    const savedPosition = localStorage.getItem(STORAGE_KEY);

    if (savedPosition) {
      try {
        const parsed = JSON.parse(savedPosition);

        const safePosition = clampPosition(
          Number(parsed.x),
          Number(parsed.y)
        );

        setPosition(safePosition);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(safePosition));
      } catch {
        const defaultPosition = getDefaultPosition();

        setPosition(defaultPosition);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPosition));
      }
    } else {
      const defaultPosition = getDefaultPosition();

      setPosition(defaultPosition);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPosition));
    }

    setIsInitialized(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setPosition((prev) => {
        const safePosition = clampPosition(prev.x, prev.y);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(safePosition));
        return safePosition;
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!showActions) return;

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;

      if (wrapperRef.current && !wrapperRef.current.contains(target)) {
        setShowActions(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowActions(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showActions]);

  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    const startX = event.clientX;
    const startY = event.clientY;
    const initialPosition = positionRef.current;

    isDraggingRef.current = false;

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      if (
        !isDraggingRef.current &&
        (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5)
      ) {
        isDraggingRef.current = true;
        setShowActions(false);
      }

      if (isDraggingRef.current) {
        const nextX = initialPosition.x + deltaX;
        const nextY = initialPosition.y + deltaY;

        const safePosition = clampPosition(nextX, nextY);
        setPosition(safePosition);
      }
    };

    const handlePointerUp = () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);

      if (isDraggingRef.current) {
        const safePosition = clampPosition(
          positionRef.current.x,
          positionRef.current.y
        );

        setPosition(safePosition);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(safePosition));

        setTimeout(() => {
          isDraggingRef.current = false;
        }, 80);
      }
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
  };

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDraggingRef.current) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    setShowActions((prev) => !prev);
  };

  const handleActionClick = (path: string) => {
    navigate(path);
    setShowActions(false);
  };

  if (!isInitialized) return null;

  const isTopHalf = position.y < window.innerHeight / 2;
  const isNearLeft = position.x < 120;
  const isNearRight = position.x > window.innerWidth - 180;

  return (
    <div
      ref={wrapperRef}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      className="fixed z-[9999] flex h-16 w-16 items-center justify-center"
    >
      {showActions && (
        <div
          className={`absolute flex gap-3 rounded-[28px] border border-border bg-card/95 p-3 text-card-foreground shadow-2xl backdrop-blur-xl ${
            isTopHalf
              ? "top-full mt-4 animate-in fade-in slide-in-from-top-3 duration-300"
              : "bottom-full mb-4 animate-in fade-in slide-in-from-bottom-3 duration-300"
          } ${
            isNearLeft
              ? "left-0"
              : isNearRight
              ? "right-0"
              : "left-1/2 -translate-x-1/2"
          }`}
        >
          <button
            type="button"
            onClick={() => setShowActions(false)}
            className="absolute -right-2.5 -top-2.5 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-lg transition-all duration-300 hover:rotate-90 hover:bg-destructive hover:text-destructive-foreground"
            aria-label="Close quick actions"
          >
            <X className="h-4 w-4" />
          </button>

          <div
            className={`absolute h-5 w-5 rotate-45 border-border bg-card ${
              isTopHalf
                ? "-top-2.5 border-l border-t"
                : "-bottom-2.5 border-b border-r"
            } ${
              isNearLeft
                ? "left-5"
                : isNearRight
                ? "right-5"
                : "left-1/2 -translate-x-1/2"
            }`}
          />

          <div className="flex max-w-[calc(100vw-40px)] items-center gap-3 overflow-visible">
            {quickActions.map((action, index) => {
              const Icon = action.icon;

              return (
                <div
                  key={action.label}
                  className="group relative flex items-center justify-center"
                  style={{
                    animationDelay: `${index * 45}ms`,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleActionClick(action.path)}
                    className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-border bg-background text-primary shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground hover:shadow-xl active:scale-95"
                    aria-label={action.label}
                    title={action.label}
                    style={{
                      width: ACTION_ICON_SIZE,
                      height: ACTION_ICON_SIZE,
                    }}
                  >
                    <Icon className="h-6 w-6 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  </button>

                  <div
                    className={`pointer-events-none absolute left-1/2 z-[10000] -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-popover px-3 py-1.5 text-xs font-semibold text-popover-foreground opacity-0 shadow-xl transition-all duration-200 group-hover:opacity-100 ${
                      isTopHalf
                        ? "top-[64px] -translate-y-2 group-hover:translate-y-0"
                        : "bottom-[64px] translate-y-2 group-hover:translate-y-0"
                    }`}
                  >
                    {action.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <button
        type="button"
        onPointerDown={handlePointerDown}
        onClick={handleToggle}
        className={`group relative flex h-16 w-16 touch-none cursor-grab items-center justify-center overflow-hidden rounded-[26px] border border-primary/30 bg-primary text-primary-foreground shadow-2xl shadow-primary/30 transition-all active:cursor-grabbing active:scale-95 ${
          showActions ? "scale-105" : "hover:scale-110 hover:rotate-3"
        }`}
        style={{
          transition: isDraggingRef.current
            ? "none"
            : "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        aria-label="Quick actions"
      >
        <span className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/20" />

        <span className="absolute -left-7 top-2 h-12 w-12 rounded-full bg-white/25 blur-xl transition-all duration-700 group-hover:left-12" />

        <span className="absolute inset-0 rounded-[26px] border border-white/20" />

        {!showActions && (
          <span className="absolute inset-0 animate-ping rounded-[26px] bg-primary/30" />
        )}

        <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 shadow-inner transition-all duration-300 group-hover:bg-white/25">
          {showActions ? (
            <X className="pointer-events-none h-6 w-6 rotate-90 scale-110 transition-all duration-300" />
          ) : (
           <MousePointerClick className="pointer-events-none h-7 w-7 transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110" />
          )}
        </span>
      </button>

      {!showActions && (
        <span className="pointer-events-none absolute -right-1 -top-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex h-4 w-4 rounded-full border border-primary bg-background" />
        </span>
      )}

      <div className="pointer-events-none absolute -bottom-2 left-1/2 h-2 w-11 -translate-x-1/2 rounded-full bg-black/25 blur-md" />
    </div>
  );
};

export default QuickActions;