import { Gamepad, Code2, Palette, Brain } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: "Lampi",
      role: "CEO & Founder",
      image: "/png/team/lampi.png",
      placeholder: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      type: "legendary",
      stats: {
        leadership: 95,
        vision: 98,
        strategy: 92
      },
      skills: ["Business Strategy", "Team Leadership", "Innovation"],
      icon: <Brain className="w-6 h-6" />,
      color: "from-yellow-400 via-amber-500 to-yellow-600"
    },
    {
      name: "Max",
      role: "Co-Founder & Lead Development",
      image: "/png/team/max.png",
      placeholder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      type: "water",
      stats: {
        coding: 96,
        architecture: 94,
        problemSolving: 95
      },
      skills: ["Full Stack", "System Design", "DevOps"],
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-400 via-cyan-500 to-blue-600"
    },
    {
      name: "La__Sauce",
      role: "Creative Director",
      image: "/png/team/sauce.jpg",
      placeholder: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      type: "fire",
      stats: {
        creativity: 97,
        design: 95,
        innovation: 93
      },
      skills: ["UI/UX Design", "Brand Strategy", "Creative Direction"],
      icon: <Palette className="w-6 h-6" />,
      color: "from-red-400 via-rose-500 to-red-600"
    },
    {
      name: "David",
      role: "Lead Developer",
      image: "/png/team/david.jpg",
      placeholder: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      type: "electric",
      stats: {
        vision: 94,
        optimization: 96,
        debugging: 95
      },
      skills: ["Dapp Developer", "Performance", "Architecture"],
      icon: <Gamepad className="w-6 h-6" />,
      color: "from-purple-400 via-violet-500 to-purple-600"
    }
  ];

  return (
    <section id="team" className="relative py-20">
      <div className="absolute inset-0 cyber-grid"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold section-title welcome-text">
            Meet Our Team
          </h2>
          <p className="mt-4 text-xl text-gray-300 section-description">
            The legendary trainers behind Apex Studio
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="group perspective">
              <div className="relative transform-gpu transition-all duration-700 preserve-3d group-hover:rotate-y-180">
                {/* Front of Card */}
                <div className="relative h-[500px]">
                  {/* Card Background with Pokemon-style gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-10 rounded-2xl`}></div>
                  
                  {/* Card Border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl blur transition-opacity duration-500"></div>
                  
                  {/* Card Content */}
                  <div className="relative h-full bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                    {/* Type Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${member.color} bg-opacity-20 backdrop-blur-sm`}>
                      {member.type}
                    </div>

                    {/* Member Image */}
                    <div className="relative mt-6 mb-4">
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20 rounded-xl blur-md`}></div>
                      <img 
                        src={member.image || member.placeholder}
                        alt={member.name}
                        className="relative w-full h-48 object-cover object-center rounded-xl"
                      />
                    </div>

                    {/* Member Info */}
                    <div className="text-center mt-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${member.color} bg-opacity-20`}>
                          {member.icon}
                        </div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {member.name}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-400 mb-4">{member.role}</p>
                    </div>

                    {/* Stats */}
                    <div className="space-y-2">
                      {Object.entries(member.stats).map(([stat, value]) => (
                        <div key={stat} className="flex items-center justify-between">
                          <span className="text-xs text-gray-400 capitalize">{stat}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full bg-gradient-to-r ${member.color}`}
                                style={{ width: `${value}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-400">{value}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Skills */}
                    <div className="mt-4 flex flex-wrap gap-3">
                      {member.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className={`px-2 py-1 rounded-full text-xs bg-gradient-to-r ${member.color} bg-opacity-20 backdrop-blur-sm border border-white/10`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 h-[500px] rotate-y-180 backface-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20 rounded-2xl`}></div>
                  <div className="relative h-full bg-black/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    {/* Decorative Corner Elements */}
                    <div className="absolute top-0 left-0 w-16 h-16">
                      <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${member.color}`}></div>
                      <div className={`absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b ${member.color}`}></div>
                    </div>
                    <div className="absolute top-0 right-0 w-16 h-16">
                      <div className={`absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l ${member.color}`}></div>
                      <div className={`absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b ${member.color}`}></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-16 h-16">
                      <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${member.color}`}></div>
                      <div className={`absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t ${member.color}`}></div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-16 h-16">
                      <div className={`absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l ${member.color}`}></div>
                      <div className={`absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t ${member.color}`}></div>
                    </div>

                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h4 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                          About {member.name}
                        </h4>
                        <p className="text-base text-white/90 leading-relaxed font-medium">
                          A passionate {member.role.toLowerCase()} with expertise in various aspects of game development and blockchain technology. Committed to pushing the boundaries of what's possible in gaming.
                        </p>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="bg-black/40 p-4 rounded-lg backdrop-blur-sm">
                          <h5 className={`text-base font-bold text-white mb-3 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                            Special Abilities
                          </h5>
                          <ul className="grid grid-cols-2 gap-2">
                            {member.skills.map((skill, idx) => (
                              <li 
                                key={idx}
                                className={`text-sm text-white/90 flex items-center gap-2 bg-gradient-to-r ${member.color} bg-opacity-10 rounded-lg p-2`}
                              >
                                <div className="h-1.5 w-1.5 rounded-full bg-current"></div>
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-black/40 p-4 rounded-lg backdrop-blur-sm">
                          <h5 className={`text-base font-bold text-white mb-3 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                            Power Level
                          </h5>
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-3 bg-black/50 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full bg-gradient-to-r ${member.color}`}
                                style={{ width: `${Object.values(member.stats).reduce((a, b) => a + b, 0) / 3}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-bold text-white/90">
                              {Math.round(Object.values(member.stats).reduce((a, b) => a + b, 0) / 3)}/100
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}