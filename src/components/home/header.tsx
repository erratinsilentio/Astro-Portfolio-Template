export default function LogoHeader() {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row sm:items-end">
      <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center">
        <span className="text-[120px] leading-8 mr-6 brightness-125">👾</span>
        <section>
          <section className="overflow-hidden">
            <div className="animate-slide-up">
              <h1 className="animate-gradient-bg tracking-wide text-center sm:text-left text-[44px] sm:text-[50px] font-[family-name:var(--font-geist-mono)] bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-300 to-indigo-300">
                erratinsilentio.dev
              </h1>
            </div>
          </section>
          <span className="text-[20px] animate-fade-in text-center font-[family-name:var(--font-geist-mono)] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700">
            Creative Web Developer
          </span>
        </section>
      </div>
    </div>
  );
}
