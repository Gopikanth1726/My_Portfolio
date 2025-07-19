import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Earthquake Detection System',
      description: 'Developed a real-time earthquake detection system using NodeMCU sensors to stream vibration data to Firebase.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      technologies: ['IoT', 'Firebase Realtime DB', 'FCM', 'Python', 'AI/ML','Flask'],
      githubUrl: 'https://github.com/Gopikanth1726/EarthQuake',
      featured: true
    },
    {
      id: 2,
      title: 'Nutrition Recommendation Planner',
      description: 'Hosted a personalized meal recommendation model using AWS Lambda and DynamoDB for scalable processing',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
      technologies: ['AWS', 'DynamoDB', 'Lambda', 'SNS','React.js'],
      githubUrl: 'https://github.com/Gopikanth1726/AWS',
      featured: true
    },
    {
      id: 3,
      title: 'Green Bin: Smart Garbage Pickup System',
      description: 'Developed a web application enabling users to request garbage pickup and track status via interactive dashboards.',
      image: '/green-globe.jpg',
      technologies: ['React.js', 'Spring Boot', 'MySQL', ' Firebase Auth', 'JWT'],
      githubUrl: 'https://github.com/Gopikanth1726/Green_Bin',
      featured: true
    }
    
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div id="projects" className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, featuring full-stack applications, 
            innovative solutions, and creative implementations.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-primary mb-8">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/20 text-primary border-primary/40">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-secondary/40 text-secondary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-secondary mb-8"></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden glass-effect border-muted hover:border-secondary/40 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-muted-foreground/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs border-muted-foreground/20">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <Card className="p-8 glass-effect border-accent/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in collaborating?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <a href="mailto:your.email@example.com?subject=Collaboration%20Opportunity&body=Hi%20there%2C%20I%20would%20like%20to%20work%20with%20you%20on..." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-secondary hover:shadow-glow-pink text-black">
                Let's Work Together
              </Button>
            </a>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
