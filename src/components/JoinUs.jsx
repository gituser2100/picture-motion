import React from 'react';
import { StarIcon, HomeIcon, WalletIcon, TvIcon, ShieldCheckIcon, PlayIcon } from '@heroicons/react/16/solid';

const JoinUs = () => {
  const industries = [
    {
      icon: StarIcon,
      title: 'A World of Entertainment',
      description: 'Discover a universe of movies and TV shows, from classic favorites to the latest blockbusters',
      gradient: 'from-purple-500/20 to-blue-500/20'
    },
    {
      icon: WalletIcon,
      title: 'Affordable Entertainment',
      description: 'Enjoy premium entertainment without breaking the bank. Our flexible plans fit every budget',
      gradient: 'from-purple-500/20 to-blue-500/20'
    },
    {
      icon: TvIcon,
      title: 'Stream Anytime, Anywhere',
      description: 'Watch your favorite shows on any device, at your own pace.',
      gradient: 'from-teal-500/20 to-indigo-500/20'
    },
    {
      icon: HomeIcon,
      title: 'Your Home for Entertainment',
      description: 'Relax and unwind with your family. Our platform offers something for everyone',
      gradient: 'from-rose-500/20 to-orange-500/20'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure and Safe',
      description: 'Enjoy peace of mind with our secure platform and robust privacy measures',
      gradient: 'from-rose-500/20 to-orange-500/20'
    },
    {
      icon: PlayIcon,
      title: 'Non-Stop Entertainment',
      description: 'Dive into endless hours of entertainment with our vast library of movies and TV shows',
      gradient: 'from-rose-500/20 to-orange-500/20'
    },
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-4xl font-semibold tracking-widest text-white uppercase">Consider Joining us</h2>
          <p className="text-base text-gray-400">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className={`
                group relative overflow-hidden rounded-xl 
                bg-slate-800/50 border border-slate-700/50
                transition-all duration-300 ease-in-out
                hover:bg-gradient-to-br ${industry.gradient}
                transform hover:-translate-y-2 hover:scale-[1.02]
                shadow-xl hover:shadow-2xl hover:cursor-pointer
              `}
            >
              <div className="relative z-10 p-6">
                <div className="flex justify-center mb-6">
                  <industry.icon 
                    className="w-16 h-16 transition-colors text-white/70 group-hover:text-white" 
                  />
                </div>
                <h3 className="mb-4 text-xl font-bold text-white transition-colors group-hover:text-white/90">
                  {industry.title}
                </h3>
                <p className="text-gray-400 transition-colors group-hover:text-white/80">
                  {industry.description}
                </p>
              </div>
              <div className="absolute inset-x-0 top-0 h-1 transition-opacity bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:opacity-0">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JoinUs;