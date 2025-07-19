import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  Zap,
  Monitor,
  Server
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical Longuages',
      icon: Code,
      color: 'neon-cyan',
      skills: [
        { name: 'Jav', level: 90 },
        { name: 'C/C++', level: 80 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'JavaScript', level: 80 },
        { name: 'SQL', level: 85 },
        { name: 'PL/SQL', level: 75 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'neon-purple',
      skills: [
        { name: 'Spring', level: 90 },
        { name: 'Spring Boot', level: 88 },
        { name: 'Postman', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'REST APIs', level: 85 },
        { name: 'Node.js', level: 80 }
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'neon-pink',
      skills: [
        { name: 'MySQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 82 },
        { name: 'DynamoDB', level: 85 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'electric-green',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Azure', level: 80 },
        { name: 'Google Cloud', level: 70 },
        { name: 'Firebase', level: 82 },
        
      ]
    }
  ];

  const tools = [
    { name: 'VS Code', icon: Code },
    { name: 'Git & GitHub', icon: Zap },
    { name: 'IntelliJ IDEA', icon: Monitor },
    { name: 'Postman', icon: Smartphone }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels 
            across different technologies and tools.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Card className="p-8 glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg bg-${category.color}/10 border border-${category.color}/20`}>
                      <IconComponent className={`text-${category.color}`} size={24} />
                    </div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <Progress 
                            value={0} 
                            className="h-2 bg-muted"
                          />
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                            className={`absolute top-0 left-0 h-2 bg-gradient-to-r from-${category.color} to-${category.color}/70 rounded-full`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold gradient-text mb-8">Favorite Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="p-6 glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:shadow-glow-cyan transition-all duration-300">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                      <span className="font-medium text-sm">{tool.name}</span>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Coding Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-8">Coding Journey</h2>
          <div className="grid md:grid-cols-4 gap-6">
            { [
              { label: 'Years of Experience', value: '2+' },
              { label: 'Projects Completed', value: '10+' },
              { label: 'Technologies Learned', value: '20+' },
              { label: 'Lines of Code', value: '100K+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 glass-effect border-secondary/20 hover:border-secondary/40 transition-all duration-300 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Coding Profiles */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://leetcode.com/u/Gopikanth__26/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            <img src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" alt="LeetCode" className="h-6 w-6" />
            LeetCode Profile
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/gopikantttv6/?_gl=1*1ulygid*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwgpCzBhBhEiwAOSQWQWRARF1fJtxpLJXwqY3HlhyOLL929lyykw2pVtyOHrVyFeWkHS8_hhoCjEgQAvD_BwE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-green-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200.png" alt="GFG" className="h-6 w-6" />
            GFG Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;