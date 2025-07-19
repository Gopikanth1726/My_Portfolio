import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const timeline = [
    {
      year: '2022',
      title: 'B.Tch Information Technology',
      company: 'VIT Vellore',
      description: 'Awarded 100% Scholarship under the prestigious STARS Scheme at VIuring 1st rank in district in 12th grade.',
      type: 'Student'
    },
    {
      year: '2022',
      title: '12th Standard',
      company: 'G.M.H.S.S Thuneri,The Nilgiris',
      description: [
        'Received the Scope Project Award in Chemistry from the Tamil Nadu Education System for excellence in scientific research and innovation.',
        'Honored as LIC Student of the Year by LIC for academic excellence and contributions during HSC.'
      ],
      type: 'work'
    },
    {
      year: '2022',
      title: '12th Standard',
      company: 'G.M.H.S.S Thuneri,The Nilgiris',
      description: 'I secured the first rank in my school in 12th standard with 85%, ranking highest among all students.',
      type: 'School'
    },
    {
      year: '2020',
      title: '10th Standard',
      company: 'G.H.S. Billicombai,The Nilgiris',
      description: 'I secured the first rank in my school in 10th standard with 95%.',
      type: 'school'
    }
  ];

  const skills = [
    'Java', 'C', 'C++', 'HTML/CSS', 'JavaScript', 'SQL', 'PL/SQL',
    'Spring Boot', 'Bootstrap', 'React.js', 'Angular.js', 'Node.js', 'Express.js',
     'MySQL', 'MongoDB', 'DynamoDB'
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aspiring Software developer with hands-on experience in building real-world projects using modern web technologies. Eager to solve problems, learn continuously, and create impactful digital solutions.


          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 glass-effect border-primary/20">
              <h2 className="text-2xl font-bold text-primary mb-6">Get to Know Me</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I’m a final-year B.Tech Information Technology student at VIT, Vellore, with a strong foundation in software development, DSA, and a passion for full-stack and cloud technologies. Proficient in Java and C/C++, I have hands-on experience building and deploying full-stack web apps using React, Flask, SQL, and cloud services like AWS.

One of my key projects includes a Nutrition Recommendation Planner using AWS Lambda and DynamoDB for personalized meal planning. I'm also exploring Microsoft Azure and GCP, aiming to build scalable, real-world solutions. With strong problem-solving skills and a collaborative mindset, I’m seeking roles in software or full-stack development to contribute and grow.


              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="text-primary" size={16} />
                  <span>Vellore, India</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="text-primary" size={16} />
                  <span>Available for new opportunities</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Skills Overview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-8 glass-effect border-secondary/20">
              <h2 className="text-2xl font-bold text-secondary mb-6">Technical Skills</h2>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="px-3 py-2 bg-muted rounded-lg text-sm text-center hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">My Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-primary opacity-30" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <Card className="p-6 glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        {item.type === 'work' ? (
                          <Briefcase className="text-primary" size={16} />
                        ) : (
                          <Award className="text-secondary" size={16} />
                        )}
                        <span className="text-sm font-semibold text-primary">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-accent font-medium mb-3">{item.company}</p>
                      <p className="text-muted-foreground text-sm">
                        {Array.isArray(item.description)
                          ? (
                              <ul className="list-disc pl-5">
                                {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
                              </ul>
                            )
                          : item.description}
                      </p>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block relative">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow-cyan" />
                  </div>
                  
                  <div className="hidden lg:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;