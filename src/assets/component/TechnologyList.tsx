import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../../type";

interface TechnologyListProps {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (technology: Technology) => void;
}

function TechnologyList({ technologies, stack, onAdd }: TechnologyListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {technologies.map((technology) => {
        const selected = stack.some((item) => item.id === technology.id);

        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            isSelected={selected}
            onAdd={onAdd}
          />
        );
      })}
    </div>
  );
}

export default TechnologyList;
