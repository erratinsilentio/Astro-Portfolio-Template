export default function LogoHeader() {
  return (
    <div className=" flex flex-col items-center justify-center sm:flex-row sm:items-end">
      <div className="flex flex-col items-center justify-center sm:flex-row sm:items-end">
        <img src="/Tesseract.png" alt="Tarot Reader logo" width={130} />
        <section className="">
          <h1 className="px-4 tracking-wide text-center sm:text-left text-[44px] sm:text-[50px] font-[family-name:var(--font-geist-mono)] bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300">
            erratinsilentio.dev
          </h1>
          <span className=" text-[20px] text-center font-[family-name:var(--font-geist-mono)] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500">
            Creative Web Developer
          </span>
        </section>
      </div>
    </div>
  );
}
