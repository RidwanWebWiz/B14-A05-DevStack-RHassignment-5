import type { Technology } from "../../type";

interface TechnologyCardProps {
  technology: Technology;
  isSelected: boolean;
  onAdd: (technology: Technology) => void;
}

const badgeStyles: Record<string, string> = {
  popular: "bg-sky-50 text-sky-600 border-sky-100",
  versatile: "bg-emerald-50 text-emerald-700 border-emerald-100",
  fast: "bg-orange-50 text-orange-700 border-orange-100",
  "top sql": "bg-sky-50 text-sky-600 border-sky-100",
  standard: "bg-emerald-50 text-emerald-700 border-emerald-100",
  cache: "bg-red-50 text-red-700 border-red-100",
  ubiquitous: "bg-amber-50 text-amber-800 border-amber-100",
  essential: "bg-sky-50 text-sky-600 border-sky-100",
  robust: "bg-sky-50 text-sky-600 border-sky-100",
  containers: "bg-sky-50 text-sky-600 border-sky-100",
  modern: "bg-teal-50 text-teal-700 border-teal-100",
};

const defaultBadgeStyles = "bg-slate-50 text-slate-600 border-slate-100";

function TechnologyCard({
  technology,
  isSelected,
  onAdd,
}: TechnologyCardProps) {
  const badgeKey = technology.badge.toLowerCase();
  const customBadgeClasses = badgeStyles[badgeKey] || defaultBadgeStyles;

  return (
    <div
      className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 bg-white ${
        isSelected
          ? "border-green-300 shadow-md ring-1 ring-green-400"
          : "border-slate-100 hover:border-slate-200 hover:shadow-sm"
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <img
                src={technology.icon}
                alt={technology.title}
                className="w-8 h-8 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {technology.title}
            </h3>
          </div>

          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold whitespace-nowrap shrink-0 ${customBadgeClasses}`}
          >
            {technology.badge}
          </span>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-slate-400 min-h-10">
          {technology.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
          <span className="text-slate-700 bg-[#f2f4f5] rounded-xl px-2 py-1   ">
            {technology.category}
          </span>
          <span>{technology.difficulty}</span>
          <span className="flex items-center gap-1">
            <span className="text-amber-400">★</span> {technology.rating}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        className={`mt-6 w-full rounded-xl py-3 text-sm font-semibold text-white transition duration-200 ${
          isSelected
            ? "bg-pink-600 hover:bg-pink-500"
            : "bg-slate-900 hover:bg-slate-800"
        }`}
      >
        {isSelected ? "Remove from Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;