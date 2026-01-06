const MusicModule = () => {
  return (
    <section id="music">
      <h3 className="text-2xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
        Some of My Favorite Music
      </h3>

      <p className="text-sm text-neutral-700 dark:text-neutral-200/90 max-w-2xl mb-6 leading-relaxed">
        A rotating, unfiltered mix pulled from some of my favorite songs. It’s
        what I tend to keep on while building or winding down, and I hope it
        gives a small sense of my personality and taste.
      </p>

      <div className="rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-white/5">
        <iframe
          src="https://open.spotify.com/embed/playlist/3QH1lbhhW9jzH3y0xDpA66?utm_source=generator"
          width="100%"
          height="420"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify playlist player"
          className="block"
        />
      </div>
    </section>
  );
};

export default MusicModule;
