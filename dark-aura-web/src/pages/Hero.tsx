import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/Background/ParticleBackground';
import FloatingCube from '@/components/3D/FloatingCube';
import { Link } from "react-router-dom";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jacksamsparrow17@gmail.com', label: 'Email' },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Gradient Background Blur */}
      <div className="absolute inset-0 bg-gradient-backdrop opacity-50" />
      
      {/* Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      {/* 3D Scene */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingCube position={[-4, 2, 0]} color="#00f5ff" scale={0.5} />
          <FloatingCube position={[4, -2, 0]} color="#8b5cf6" scale={0.7} />
          <FloatingCube position={[0, 3, -2]} color="#ec4899" scale={0.4} />
          <FloatingCube position={[-3, -3, -1]} color="#00ff88" scale={0.6} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary font-medium"
          >
            Hi, I'm
          </motion.p>

          {/* Main Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text glow-text"
          >
            Gopikanth S
          </motion.h1>

          {/* Title/Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-secondary"
          >
            B.Tech Information Technology
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
           Passionate software developer with a strong foundation in building responsive and efficient applications. Skilled in Java, C/C++, and JavaScript, with experience developing full-stack web applications using React JS, Spring Boot, and Node.js. Proficient in HTML, CSS, and SQL, and experienced in managing data with MySQL and Firebase.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/projects#projects" style={{ textDecoration: 'none' }}>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow-cyan transition-all duration-300 px-8 py-3 text-black font-semibold"
                asChild
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowRight className="mr-2 h-5 w-5" />
                  View Projects
                </span>
              </Button>
            </Link>
            
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 px-8 py-3"
                asChild
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </span>
              </Button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
             
              if (social.label === 'Email') {
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                   
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full glass-effect border border-primary/30 text-primary hover:text-primary hover:shadow-glow-cyan transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              }
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full glass-effect border border-primary/30 text-primary hover:text-primary hover:shadow-glow-cyan transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;