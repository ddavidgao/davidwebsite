"use client";

import Image from "next/image";
import contentData from "../data/content.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="max-w-5xl mx-auto px-8 py-16 md:py-20">

        {/* Header */}
        <header className="mb-16 flex items-start gap-6">
          <Image
            src="/david.jpg"
            alt="David Gao"
            width={100}
            height={100}
            className="w-24 h-24 rounded-full object-cover object-top"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
              David Gao
            </h1>
            <p className="text-neutral-500">
              Software Engineer · Purdue University
            </p>
          </div>
        </header>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-14">

            {/* Projects */}
            <section>
              <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-6">
                Projects
              </h2>
              <div className="space-y-8">
                {contentData.sections.projects.items.map((project) => (
                  <div key={project.id}>
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <h3 className="text-lg font-medium">
                        {project.links.demo || project.links.github ? (
                          <a
                            href={project.links.demo || project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-neutral-600 transition-colors"
                          >
                            {project.name} ↗
                          </a>
                        ) : (
                          project.name
                        )}
                      </h3>
                      <span className="text-sm text-neutral-400 whitespace-nowrap">
                        {project.metrics}
                      </span>
                    </div>
                    <p className="text-neutral-600 text-[15px] leading-relaxed mb-2">
                      {project.description}
                    </p>
                    <p className="text-sm text-neutral-400">
                      {project.tech.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-6">
                Experience
              </h2>
              <div className="space-y-6">
                {contentData.sections.experience.jobs.map((job) => (
                  <div key={job.id} className="flex gap-4">
                    <div className="w-10 h-10 rounded bg-neutral-100 flex items-center justify-center p-1.5 flex-shrink-0">
                      <Image
                        src={`/${job.logo}.png`}
                        alt={job.company}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-3 mb-0.5">
                        <h3 className="font-medium">{job.title}</h3>
                        <span className="text-sm text-neutral-400">{job.period}</span>
                      </div>
                      <p className="text-sm text-neutral-500 mb-1">{job.company}</p>
                      <p className="text-[15px] text-neutral-600 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">

            {/* Skills */}
            <section>
              <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
                Skills
              </h2>
              <div className="space-y-4">
                {contentData.sections.skills.categories.map((cat) => (
                  <div key={cat.name}>
                    <h3 className="text-sm font-medium text-neutral-700 mb-1">{cat.name}</h3>
                    <p className="text-sm text-neutral-500">
                      {cat.items.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Links */}
            <section>
              <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
                Links
              </h2>
              <div className="space-y-2">
                {Object.entries(contentData.sections.contact.links).map(([k, v]) => (
                  <a
                    key={k}
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {v.text} ↗
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>

      </div>
    </main>
  );
}
