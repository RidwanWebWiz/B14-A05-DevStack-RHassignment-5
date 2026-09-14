import { useState } from "react";
import Navbar from "./assets/component/Navbar";
import Hero from "./assets/component/Hero";
import TechnologyList from "./assets/component/TechnologyList";
import YourStack from "./assets/component/YourStack";
import Footer from "./assets/component/Footer";

import technologies from "./data/data.json";
import type { Technology } from "./type";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology) => {
    const alreadySelected = stack.some((item) => item.id === technology.id);

    if (alreadySelected) {
      setStack((currentStack: Technology[]) =>
        currentStack.filter((item) => item.id !== technology.id)
      );
    } else {
      setStack((currentStack: Technology[]) => [...currentStack, technology]);
    }
  };

  const handleRemoveFromStack = (id: number) => {
    setStack((currentStack: Technology[]) =>
      currentStack.filter((technology) => technology.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      <div>
        <Navbar />
        <Hero />

        
        <section className="max-w-7xl mx-auto px-8 py-10">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Explore the{" "}
              <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <TechnologyList
                technologies={technologies as Technology[]}
                stack={stack}
                onAdd={handleAddToStack}
              />
            </div>

            <div className="lg:col-span-1">
              <YourStack
                stack={stack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;