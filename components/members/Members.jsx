function Members() {
  return (
    <section className="grid grid-cols-3 border-t border-t-white mt-10 mx-5 py-28 relative overflow-y-hidden z-10">
      <div className="grid place-items-center gap-y-2">
        <p className="text-hsPink font-clashDisplay text-7xl">5000 +</p>
        <p className="text-hsWhite font-clashDisplay text-3xl ">
          Community Members
        </p>
      </div>
      <div className="grid place-items-center gap-y-2">
        <p className="text-hsPink font-clashDisplay text-7xl">50 +</p>
        <p className="text-hsWhite font-clashDisplay text-3xl ">
          Events Organised
        </p>
      </div>
      <div className="grid place-items-center gap-y-2">
        <p className="text-hsPink font-clashDisplay text-7xl">5000 +</p>
        <p className="text-hsWhite font-clashDisplay text-3xl ">
          Active Members
        </p>
      </div>
      <div className="bg-hsBlue blur-3xl  w-3/4 h-96 absolute top-full -translate-y-7 left-1/2 -translate-x-1/2 -z-10 ">
        <div className="bg-hsPink blur-lg bg-blend-normal w-1/2 h-36 mx-auto translate-y-5" />
      </div>
    </section>
  );
}

export default Members;
