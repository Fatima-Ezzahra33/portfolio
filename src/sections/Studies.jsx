import React from "react";

const studies = [
  {
    title: "Computer Engineering specialization",
    institution: "ENSA - National School of Applied Sciences, Tangier",
    duration: "2024 - 2027",
  },
  {
    title: "Preparatory cycle in Engineering sciences",
    institution: "ENSA - National School of Applied Sciences, Tangier",
    duration: "2022 - 2024",
  },
  {
    title:
      "Mathematical Science Baccalaureate - Highest honors",
    institution: "Ilyass High School, El Jadida",
    duration: "2021 - 2022",
  },
];

function Studies() {
  return (
    <section
      id="studies"
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 pb-20 relative z-10 flex flex-col xl:flex-row xl:gap-10">
        <div className="flex flex-col gap-10 animate-fade-in animation-delay-800">
          {/*left column - title*/}
          <div className="text-primary text-lg">
            <span>Accademic background</span>
          </div>
          {/*headline*/}
          <h2 className="text-primary text-5xl font-medium">
            My Academic Journey {''}
            <span className="font-serif font-normal italic text-white">
              & Growth
            </span>
          </h2>
          <p className="text-sm text-muted-foreground text-right">
            How my academic journey shaped my skills in full-stack development, Machine learning and AI, and how it continues to fuel my passion for building meaningful software systems.
          </p>
        </div>
      </div>
      <div className="relative mx-auto max-w-5/6">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
         {/* studies Items */}
          <div className="space-y-12">
            {studies.map((std, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {std.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {std.duration}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{std.title}</h3>
                    <p className="text-muted-foreground">{std.institution}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {std.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}

export default Studies;
