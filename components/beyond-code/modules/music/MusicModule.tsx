const MusicModule = () => {
  return (
    <section>
      <h3 className="text-2xl font-semibold mb-3">Some of My Favorite Music</h3>

      <p className="text-sm text-neutral-700 max-w-2xl mb-8 leading-relaxed">
        A rotating, unfiltered mix pulled from some of my favorite songs. It’s
        what I tend to keep on while building or winding down, and I hope it
        gives a small sense of my personality and taste.
      </p>

      <div className="rounded-lg overflow-hidden">
        <iframe
          src="https://open.spotify.com/embed/playlist/3QH1lbhhW9jzH3y0xDpA66?utm_source=generator"
          width="100%"
          height="380"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify playlist player"
        />
      </div>
    </section>
  );
};

export default MusicModule;
