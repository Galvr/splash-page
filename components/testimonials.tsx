import Image from 'next/image';

import YiImage from '@/public/images/Yi.jpg';
import SamImage from '@/public/images/Sam.jpg';
import SharonImage from '@/public/images/Sharon.png';
import DanielImage from '@/public/images/Daniel.png';
import GithubLogo from '@/public/images/github-logo-white.svg';
import LinkedInLogo from '@/public/images/linkedIn-logo.svg';

export default function Testimonials() {
  return (
    <section id="team">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Meet the Team</h2>
            {/* <p className="text-xl text-gray-400">
              We are a group of software engineers who love to build and solve
              problem collaboratively.
            </p> */}
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-4 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800 items-center"
              data-aos="fade-up"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src={YiImage}
                    width={240}
                    height={240}
                    alt="Yi Sun"
                  />
                </div>
              </div>
              <div className="text-gray-200 not-italic text-xl mt-3 pt-3 border-t border-gray-700 w-full text-center">
                Yi Sun
              </div>
              <div className="text-gray-200 not-italic text-xl pb-1 w-full text-center">
                Software Engineer
              </div>
              <div className="flex items-center justify-center w-full">
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out mx-0.5"
                  href="https://github.com/YiSun88"
                >
                  <Image
                    className="rounded-full"
                    src={GithubLogo}
                    width={28}
                    height={28}
                    alt="Github Logo"
                  />
                </a>
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out mx-0.5"
                  href="https://linkedin.com/in/yi-sun-swe"
                >
                  <Image
                    src={LinkedInLogo}
                    width={32}
                    height={32}
                    alt="LinkedIn Logo"
                  />
                </a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800 items-center"
              data-aos="fade-up"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src={SamImage}
                    width={240}
                    height={240}
                    alt="Sam Blackburn"
                  />
                </div>
              </div>
              <div className="text-gray-200 not-italic text-xl mt-3 pt-3 border-t border-gray-700 w-full text-center">
                Sam Blackburn
              </div>
              <div className="text-gray-200 not-italic text-xl pb-1 w-full text-center">
                Software Engineer
              </div>
              <div className="flex items-center justify-center w-full">
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out mx-0.5"
                  href="https://github.com/samrblackburn"
                >
                  <Image
                    className="rounded-full"
                    src={GithubLogo}
                    width={28}
                    height={28}
                    alt="Github Logo"
                  />
                </a>
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out mx-0.5"
                  href="https://linkedin.com/in/samrblackburn"
                >
                  <Image
                    src={LinkedInLogo}
                    width={32}
                    height={32}
                    alt="LinkedIn Logo"
                  />
                </a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800 items-center"
              data-aos="fade-up"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src={SharonImage}
                    width={240}
                    height={240}
                    alt="Yi Sun"
                  />
                </div>
              </div>
              <div className="text-gray-200 not-italic text-xl mt-3 pt-3 border-t border-gray-700 w-full text-center">
                Sharon Chen
              </div>
              <div className="text-gray-200 not-italic text-xl pb-1 w-full text-center">
                Software Engineer
              </div>
              <div className="flex items-center justify-center w-full">
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out mx-0.5"
                  href="https://github.com/sc1272"
                >
                  <Image
                    className="rounded-full"
                    src={GithubLogo}
                    width={28}
                    height={28}
                    alt="Github Logo"
                  />
                </a>
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out mx-0.5"
                  href="https://www.linkedin.com/in/sharonjchen/"
                >
                  <Image
                    src={LinkedInLogo}
                    width={32}
                    height={32}
                    alt="LinkedIn Logo"
                  />
                </a>
              </div>
            </div>

            {/* 4th testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800 items-center"
              data-aos="fade-up"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src={DanielImage}
                    width={240}
                    height={240}
                    alt="Yi Sun"
                  />
                </div>
              </div>
              <div className="text-gray-200 not-italic text-xl mt-3 pt-3 border-t border-gray-700 w-full text-center">
                Daniel Jaworski
              </div>
              <div className="text-gray-200 not-italic text-xl pb-1 w-full text-center">
                Software Engineer
              </div>
              <div className="flex items-center justify-center w-full">
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out mx-0.5"
                  href="https://github.com/Djaworski1"
                >
                  <Image
                    className="rounded-full"
                    src={GithubLogo}
                    width={28}
                    height={28}
                    alt="Github Logo"
                  />
                </a>
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out mx-0.5"
                  href="https://www.linkedin.com/in/jaworskidaniel"
                >
                  <Image
                    src={LinkedInLogo}
                    width={32}
                    height={32}
                    alt="LinkedIn Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
