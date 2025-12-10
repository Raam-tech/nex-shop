interface TrustBadgeProps {
  icon: string;
  text: string;
  subtext?: string;
}

export default function TrustBadge({ icon, text, subtext }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-700">
      <span className="text-lg">{icon}</span>
      <div className="flex flex-col">
        <span className="text-white text-xs font-bold leading-tight">{text}</span>
        {subtext && <span className="text-gray-400 text-[10px] leading-tight">{subtext}</span>}
      </div>
    </div>
  );
}
