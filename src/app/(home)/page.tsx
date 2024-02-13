export default function Page() {
  return (
    <div>
      <main>
        <section className="grid grid-cols-2 gap-5 px-20 pt-10 text-center">
          <div className="bg-slate-500 max-w-[500px]">
            <div className="p-5 bg-rose-600">
              <div>
                <h1 className="text-2xl">Let&apos;s go on an adventure.</h1>
                <p>
                  Sample text that is describing what this applications purpose
                  is, and a call to action.
                </p>
                <p>We&apos;re waiting for you, the World needs you! </p>
                <button className="p-2 rounded-full bg-slate-600">
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          {/* Image Hero */}
          <div className="bg-slate-500">
            <div className="p-5 bg-sky-500">
              The Global surrounded by all 6 &quot;elements&quot;
            </div>
            The Image Hero will go here
          </div>
        </section>
      </main>
    </div>
  )
}
