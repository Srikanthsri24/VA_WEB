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
  Megaphone,
} from "lucide-react";

type QuickAction = {
  label: string;
  path: string;
  icon: React.ElementType;
  bgClass: string;
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
    bgClass: "bg-sky-500",
  },
  {
    label: "Healthcare",
    path: "/services/healthcare",
    icon: HeartPulse,
    bgClass: "bg-emerald-500",
  },
  {
    label: "Information Technology",
    path: "/services/information-technology",
    icon: Cpu,
    bgClass: "bg-blue-600",
  },
  {
    label: "Manufacturing",
    path: "/services/manufacturing",
    icon: Factory,
    bgClass: "bg-orange-500",
  },
  {
    label: "Retail",
    path: "/services/retail",
    icon: ShoppingBag,
    bgClass: "bg-pink-500",
  },
  {
    label: "Consulting Services",
    path: "/services/consulting-services",
    icon: BriefcaseBusiness,
    bgClass: "bg-violet-500",
  },
  {
    label: "Marketing",
    path: "/services/marketing",
    icon: Megaphone,
    bgClass: "bg-cyan-500",
  },
];

const FAB_SIZE = 64;
const SCREEN_GAP = 18;
const HEADER_SAFE_GAP = 95;
const MOBILE_BOTTOM_NAV_HEIGHT = 76;
const MOBILE_BOTTOM_GAP = 20;
const ACTION_SIZE = 54;
const ACTION_GAP = 12;
const MENU_PADDING = 12;
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
  const minY = HEADER_SAFE_GAP;
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
        const safePosition = clampPosition(Number(parsed.x), Number(parsed.y));

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

  const bottomSafeSpace = getBottomSafeSpace();

  const menuHeight =
    quickActions.length * ACTION_SIZE +
    (quickActions.length - 1) * ACTION_GAP +
    MENU_PADDING * 2;

  const preferredMenuTop = position.y + FAB_SIZE / 2 - menuHeight / 2;

  const menuTop = Math.max(
    HEADER_SAFE_GAP,
    Math.min(
      preferredMenuTop,
      window.innerHeight - bottomSafeSpace - menuHeight
    )
  );

  const openMenuOnLeft = position.x > window.innerWidth / 2;

  const menuLeft = openMenuOnLeft
    ? Math.max(SCREEN_GAP, position.x - 82)
    : Math.min(window.innerWidth - 82, position.x + FAB_SIZE + 18);

  return (
    <div ref={wrapperRef}>
      {showActions && (
        <div
          className="fixed z-[9998] animate-in fade-in zoom-in-95 duration-300"
          style={{
            top: `${menuTop}px`,
            left: `${menuLeft}px`,
          }}
        >
          <div className="relative flex flex-col items-center gap-3 rounded-full border border-white/70 bg-white/80 p-3 shadow-[0_20px_60px_rgba(14,165,233,0.28)] backdrop-blur-xl">
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
                    className={`flex h-[54px] w-[54px] items-center justify-center rounded-full ${action.bgClass} text-white shadow-[0_10px_24px_rgba(15,23,42,0.18)] ring-4 ring-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_16px_34px_rgba(14,165,233,0.38)] active:scale-95`}
                    aria-label={action.label}
                    title={action.label}
                  >
                    <Icon className="h-6 w-6 drop-shadow-md transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  </button>

                  <div
                    className={`pointer-events-none absolute top-1/2 z-[10000] -translate-y-1/2 whitespace-nowrap rounded-full border border-sky-100 bg-white px-4 py-2 text-xs font-bold text-slate-800 opacity-0 shadow-xl transition-all duration-200 group-hover:opacity-100 ${
                      openMenuOnLeft
                        ? "right-[70px] translate-x-2 group-hover:translate-x-0"
                        : "left-[70px] -translate-x-2 group-hover:translate-x-0"
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

      <div
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        className="fixed z-[9999] flex h-16 w-16 items-center justify-center"
      >
        {!showActions && (
          <div className="pointer-events-none absolute -top-11 left-1/2 hidden -translate-x-1/2 whitespace-nowrap md:block">
            <div className="relative overflow-hidden rounded-full border border-sky-400/40 bg-slate-950/90 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-sky-300 shadow-[0_0_22px_rgba(14,165,233,0.35)] backdrop-blur-xl">
              <span className="quick-action-shine absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <span className="relative flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
                Explore Services
              </span>
            </div>
          </div>
        )}

        <button
          type="button"
          onPointerDown={handlePointerDown}
          onClick={handleToggle}
          className={`group quick-action-float relative flex h-16 w-16 touch-none cursor-grab items-center justify-center overflow-hidden rounded-full border border-white/40 bg-gradient-to-br from-sky-400 via-blue-600 to-violet-600 text-white shadow-[0_16px_38px_rgba(37,99,235,0.45)] transition-all duration-500 active:cursor-grabbing active:scale-95 ${
            showActions
              ? "scale-105 rotate-0"
              : "hover:scale-[1.15] hover:-rotate-6"
          }`}
          style={{
            transition: isDraggingRef.current
              ? "none"
              : "transform 0.35s ease, box-shadow 0.35s ease",
          }}
          aria-label="Quick actions"
        >
          <span className="absolute inset-0 bg-gradient-to-br from-white/45 via-transparent to-black/30" />

          <span className="absolute inset-[-10px] rounded-full bg-sky-400/20 blur-xl transition-all duration-500 group-hover:bg-violet-400/30" />

          {!showActions && (
            <>
              <span className="absolute inset-[-7px] animate-ping rounded-full bg-sky-400/30" />
              <span className="absolute inset-[-14px] rounded-full border border-sky-300/25" />
              <span className="absolute inset-[-22px] rounded-full border border-violet-400/15" />
            </>
          )}

          <span className="quick-action-shine absolute top-0 h-full w-8 bg-white/35 blur-sm" />

          <span className="absolute -left-8 top-2 h-16 w-16 rounded-full bg-white/30 blur-2xl transition-all duration-700 group-hover:left-14" />

          <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 shadow-inner ring-1 ring-white/35 transition-all duration-300 group-hover:bg-white/30">
            {showActions ? (
              <X className="pointer-events-none h-7 w-7 rotate-90 scale-110 transition-all duration-300" />
            ) : (
              <MousePointerClick className="pointer-events-none h-7 w-7 drop-shadow-lg transition-all duration-500 group-hover:-rotate-12 group-hover:scale-125" />
            )}
          </span>

          <span className="absolute inset-0 rounded-full border border-white/30" />
        </button>

        {!showActions && (
          <span className="pointer-events-none absolute -right-1 -top-1 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full border border-white bg-yellow-400 shadow-md" />
          </span>
        )}

        <div className="pointer-events-none absolute -bottom-2 left-1/2 h-2 w-11 -translate-x-1/2 rounded-full bg-black/35 blur-md" />
      </div>
    </div>
  );
};

export default QuickActions;