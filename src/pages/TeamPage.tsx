import { useState } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import ImageModal from '../components/ImageModal';

export default function TeamPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const teamMembers = [
    {
      name: 'Timfon Aqua',
      role: 'Founder & CEO',
      bio: 'Visionary entrepreneur dedicated to solving real-world challenges across Africa',
      email: 'timfon@quaindustries.com',
      linkedin: '#',
      image: '/Timfon.jpeg',
    },
    {
      name: 'Michael Oputa',
      role: 'Technical Lead & Innovation Strategist',
      bio: 'Experienced tech leader driving innovation and technology solutions across our ventures',
      email: 'michaeloputa823@gmail.com',
      linkedin: 'https://ng.linkedin.com/in/michael-oputa-7310a3280',
      image: '/Tech.jpeg',
    },
    {
      name: 'Boma Jaja',
      role: 'Operations Management',
      bio: 'Skilled operations manager ensuring seamless execution and impact across our businesses',
      email: '',
      linkedin: '#',
      image: '/operations.jpeg',
    },
    {
      name: 'Gideon Daniel',
      role: 'Financial Strategist',
      bio: 'Financial strategist focused on sustainable growth and impact-driven investment across our ventures',
      email: '',
      linkedin: '#',
      image: '/finance.jpeg',
    },
    {
      name: 'Bright Utuk',
      role: 'Project Management & Partnerships',
      bio: 'Project manager building strategic partnerships and driving growth across our initiatives',
      email: '',
      linkedin: '#',
      image: '/project.jpeg',
    },
    {
      name: 'Enoch Ininyene',
      role: 'Brand & Visual Strategist',
      bio: 'Creative leader shaping our brand identity and visual storytelling across all platforms',
      email: '',
      linkedin: '#',
      image: '/Visual.jpeg',
    },
    {
      name: 'Udemeabasi James',
      role: 'Marketing & Expansion Strategist',
      bio: 'Marketing strategist focused on growth, expansion, and impact across our ventures',
      email: '',
      linkedin: '#',
      image: '/marketer.jpeg',
    },
  ];

  return (
    <section
      id="team"
      className="py-24 min-h-screen pt-28 relative overflow-hidden gradient-hero"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Team</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto" />
          <p className="mt-6 text-xl text-navy-200 max-w-3xl mx-auto">
            Talented professionals united by a shared vision to build sustainable impact across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <article
              key={index}
              className="bg-white/95 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group backdrop-blur"
            >
              <div
                className="relative h-64 overflow-hidden bg-gray-200 cursor-pointer"
                onClick={() => setSelectedImage({ src: member.image, alt: member.name })}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="px-6 py-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-navy-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-semibold text-sm">{member.role}</p>
                </div>

                <p className="text-navy-600 text-sm leading-relaxed mb-6">{member.bio}</p>

                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5 text-primary-600" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-primary-600" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-white/95 rounded-2xl shadow-lg p-10 md:p-12 max-w-4xl mx-auto backdrop-blur">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Join Our Team</h3>
          <p className="text-navy-600 text-lg leading-relaxed mb-6">
            We&apos;re always looking for talented individuals passionate about building meaningful businesses across Africa. If you share our vision and want to make an impact, we&apos;d love to hear from you.
          </p>
          <a
            href="mailto:Industriesqua@gmail.com"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-200"
          >
            Explore Opportunities
          </a>
        </div>

        <ImageModal
          isOpen={!!selectedImage}
          src={selectedImage?.src || ''}
          alt={selectedImage?.alt || ''}
          onClose={() => setSelectedImage(null)}
        />
      </div>
    </section>
  );
}
