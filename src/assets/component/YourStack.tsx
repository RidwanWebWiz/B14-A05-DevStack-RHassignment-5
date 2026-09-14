import type { Technology } from '../../type';

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll?: () => void;
}

function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
        <p className="mt-1 text-sm text-slate-400">
          {stack.length > 0
            ? `${stack.length} ${stack.length === 1 ? 'Technology' : 'Technology'} Selected`
            : "No technologies selected yet."}
        </p>
      </div>


      {stack.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-200 p-8 text-center">
          <p className="text-sm font-medium text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 p-3.5 bg-white"
            >
              <div className="flex items-center gap-3 min-w-0">
                
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
  <img
    src={technology.icon}
    alt={`${technology.title} logo`}
    className="w-6 h-6 object-contain"
  />
</div>
                <div className="min-w-0">
                  <h4 className="truncate text-sm font-bold text-slate-800">
                    {technology.title}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {technology.category}
                  </p>
                </div>
              </div>

              
              <button
                type="button"
                onClick={() => onRemove(technology.id)}
                className="shrink-0 p-1 text-slate-400 hover:text-slate-600 transition"
                aria-label="Remove item"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}

          
          {onRemoveAll && (
            <button
              type="button"
              onClick={onRemoveAll}
              className="mt-6 w-full rounded-xl border border-red-200 py-2.5 text-sm font-bold text-red-500 hover:bg-red-100 transition"
            >
              Remove All
            </button>
          )}
        </div>
      )}
    </aside>
  );
}

export default YourStack;