import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-hero_pattern bg-cover bg-no-repeat bg-bottom text-gray-900"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2  gap-8 -mt-10 sm:mt-0">
          <div data-aos="zoom-in" className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-900">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1500px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div data-aos="zoom-in" className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Tahira Nawaz, nice to meet you. Please take a look around.
            </p>
          </div>
          <div data-aos="zoom-in">
            {/*
             */}
            <ul className="list-disc list-inside space-y-2 font-bold">
              <li>
                6 years of total experience across Frontend Engineering, Web
                Support, and Quality Assurance (2020 – 2026).
              </li>
              <li>
                Strong core skills in Vue, React, JavaScript (ES6+), HTML5,
                CSS3, Tailwind CSS, and cross-browser QA testing.
              </li>
              <li>
                Frontend Engineer at TeReSol (Mar 2022 – Sept 2026): Delivered
                20+ end-to-end use cases for an enterprise web-based banking
                system, handling UI/UX implementation, seamless API integration,
                and security/reliability testing.
              </li>
              <li>
                Web Support &amp; QA Associate at Admil Communications (Aug 2020
                – Mar 2022): Managed website maintenance, cross-browser and
                device QA testing, bug reporting, and UI updates alongside
                design and development teams.
              </li>
              <li>
                Focused on clean, accessible interfaces and thorough
                testing—currently open to remote Frontend Engineer roles.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
