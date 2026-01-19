import { golfData } from "./golfData";

const GolfModule = () => {
  return (
    <section id="golf">
      <h3 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
        My Golf Journey
      </h3>

      <p className="text-sm text-neutral-700 dark:text-neutral-200/90 max-w-2xl mb-4 leading-relaxed">
        A long-term pursuit of patience and refinement. I track my rounds
        closely, focusing on fundamentals and steady progress rather than quick
        fixes.
      </p>
      <p className="text-sm text-neutral-700 dark:text-neutral-200/90 max-w-2xl mb-10">
        Statistics shown reflect my play as of November 16, 2025.
      </p>

      <div className="mb-8">
        <h4 className="text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-200 mb-4 uppercase inline-block border-b border-neutral-300 dark:border-white/20 pb-1">
          Summary
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Handicap
            </p>
            <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {golfData.summary.handicap}
            </p>
          </div>

          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Average Score
            </p>
            <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {golfData.summary.averageScore}
            </p>
          </div>

          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Best Round
            </p>
            <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {golfData.summary.bestRound}
            </p>
          </div>

          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Recent Rounds
            </p>
            <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {golfData.summary.recentRounds.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-200 mb-4 uppercase inline-block border-b border-neutral-300 dark:border-white/20 pb-1">
          Key Performance
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {golfData.keyStats.map(({ label, value }) => (
            <div key={label}>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {label}
              </p>
              <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-200 mb-4 uppercase inline-block border-b border-neutral-300 dark:border-white/20 pb-1">
          Additional Stats
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {golfData.detailedStats.map(({ label, value }) => (
            <div key={label}>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {label}
              </p>
              <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GolfModule;
