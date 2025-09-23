import { Navigation } from './components/ui/Navigation'
import { PersonalHero } from './components/sections/PersonalHero'
import { ProjectsGrid, Project } from './components/sections/ProjectsGrid'
import './styles/globals.css'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const projects: Project[] = [
  {
    title: 'Systemic',
    description: 'An innovative AI-powered platform that transforms how businesses operate through intelligent automation and data-driven insights. Building the future of enterprise workflows.',
    techStack: ['React', 'TypeScript', 'Node.js', 'AI/ML'],
    status: 'active',
    link: '#', // Replace with actual link
  },
  {
    title: 'Coachify',
    description: 'A personalized coaching application that leverages AI to provide tailored guidance and support. Empowering individuals to achieve their goals through intelligent mentorship.',
    techStack: ['Next.js', 'Python', 'OpenAI', 'PostgreSQL'],
    status: 'beta',
    link: '#', // Replace with actual link
  },
]

const socialLinks = {
  github: 'https://github.com', // Replace with your GitHub
  linkedin: 'https://linkedin.com', // Replace with your LinkedIn
  twitter: 'https://twitter.com', // Replace with your Twitter
  email: 'bowen@example.com', // Replace with your email
}

function PersonalSite() {
  return (
    <div className="min-h-screen bg-dark-primary noise">
      <Navigation
        items={navItems}
        sticky
        logo={
          <span className="text-2xl font-bold gradient-text">Bowen</span>
        }
      />

      <div id="about">
        <PersonalHero
          name="Bowen"
          greeting="Hi, I'm"
          tagline="I'm building AI applications that change our way of working"
          imageUrl="/profile.jpg"
          socialLinks={socialLinks}
        />
      </div>

      <div id="projects">
        <ProjectsGrid
          title="What I'm Building"
          subtitle="Exploring the intersection of AI and human potential"
          projects={projects}
        />
      </div>
    </div>
  )
}

export default PersonalSite