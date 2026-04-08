"use client";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isEven: boolean;
}

export function ProcessStep({
  number,
  title,
  description,
  isEven,
}: ProcessStepProps) {
  return (
    <div
      className={`process-step flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Mobile: number circle inline above text */}
      <div className="md:hidden flex items-center gap-4">
        <div className="w-16 h-16 flex-shrink-0 border-2 border-white/40 flex items-center justify-center bg-[#0a0a0a]">
          <div className="text-lg font-bold text-white">{number}</div>
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <p className="md:hidden text-white/85 text-base">{description}</p>

      {/* Desktop layout */}
      <div className={`flex-1 hidden md:block ${isEven ? "" : "md:text-right"}`}>
        <div className={`text-7xl font-bold text-white/40 mb-4 ${isEven ? "" : "md:text-right"}`}>
          {number}
        </div>
        <h3 className={`text-2xl font-bold mb-2 text-white ${isEven ? "" : "md:text-right"}`}>
          {title}
        </h3>
        <p className={`text-white/85 ${isEven ? "max-w-sm" : "md:text-right md:ml-auto md:max-w-sm"}`}>
          {description}
        </p>
      </div>

      <div className="relative hidden md:flex items-center justify-center z-10">
        <div className="w-20 h-20 border-2 border-white/40 flex items-center justify-center bg-[#0a0a0a] transition-all duration-300">
          <div className="text-xl font-bold text-white">{number}</div>
        </div>
      </div>

      <div className="flex-1 hidden md:block">
        <div className="h-[2px] w-full bg-white/30"></div>
      </div>
    </div>
  );
}
