interface AccordionSection {
  id: number;
  soal: string;
  jawaban: string;
}

const Accordion = () => {
  const accordionSection: AccordionSection[] = [
    {
      id: 1,
      soal: "Apakah pembelajaran ini fleksibel?",
      jawaban:
        "Ya, pembelajaran bersifat fleksibel dan bisa diakses kapan saja dengan lifetime access.",
    },
    {
      id: 2,
      soal: "Apakah cocok untuk pemula?",
      jawaban:
        "Sangat cocok untuk pemula hingga tingkat menengah, materi disusun dari dasar sampai lanjut.",
    },
    {
      id: 3,
      soal: "Apakah kelas ini berbentuk video atau teks?",
      jawaban:
        "Kelas disediakan dalam bentuk materi teks yang mudah dipahami dan bisa dibaca kapan saja.",
    },
    {
      id: 4,
      soal: "Apakah ada mentor?",
      jawaban:
        "Ya, tersedia mentor yang aktif di grup Discord (DC) untuk membantu dan menjawab pertanyaan peserta.",
    },
    {
      id: 5,
      soal: "Apakah ada sesi diskusi karir IT?",
      jawaban:
        "Ada sesi ngobrol santai untuk berbagi pengalaman, keluh kesah, dan diskusi seputar karir di bidang IT.",
    },
    {
      id: 6,
      soal: "Apakah tersedia program beasiswa?",
      jawaban:
        "Ya, tersedia program beasiswa untuk peserta terpilih dengan syarat dan ketentuan tertentu.",
    },
    {
      id: 7,
      soal: "Apakah ada uji coba kelas gratis?",
      jawaban:
        "Ada uji coba kelas gratis selama 1 minggu untuk mengenal sistem dan materi pembelajaran.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-32">
        {/* Title */}
        <div className="mb-12 max-w-xl">
          <h1 className="text-4xl font-bold text-amber-600 sm:text-5xl">
            Pertanyaan
          </h1>
          <div className="mt-3 h-1 w-32 rounded bg-amber-500" />
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {accordionSection.map((item) => (
            <details
              key={item.id}
              className="group rounded-lg border border-gray-200 bg-white"
            >
              <summary className="flex cursor-pointer items-center justify-between px-4 py-3 font-medium text-gray-900 hover:bg-gray-50">
                <span>{item.soal}</span>

                <svg
                  className="h-5 w-5 transition-transform duration-300 group-open:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <div className="px-4 pb-4">
                <p className="text-gray-700">{item.jawaban}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
