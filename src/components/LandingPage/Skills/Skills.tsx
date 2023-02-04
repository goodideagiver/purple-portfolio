import { useScroll, useTransform, motion, useSpring } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useIsClient } from 'usehooks-ts'
import { FloatingIcons } from './FloatingIcons/FloatingIcons'
import { Skill } from './Skill/Skill'
import classes from './Skills.module.scss'
import { Stars } from './Stars/Stars'

const skills: {
  text: string
  icon?: string
  color?: string
}[] = [
  {
    text: 'TypeScript',
    icon: '/typescript.svg',
    color: '#007ACC',
  },
  {
    text: 'React',
    icon: '/react.svg',
    color: '#7ed6f8',
  },
  {
    text: 'SCSS',
    icon: '/sass.png',
    color: '#CC669B',
  },
  {
    text: 'Next.js',
    icon: '/next.svg',
    color: '#ffffff',
  },
]

export const Skills = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const skillElementRef = useRef<HTMLDivElement>(null)
  const [skillsWidth, setSkillsWidth] = useState(0)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  })

  const x = useSpring(
    useTransform(scrollYProgress, [0.1, 1], [0, -skillsWidth]),
    {
      damping: 15,
      mass: 0.27,
      stiffness: 100,
    }
  )

  useEffect(() => {
    const windowResizeHandler = () => {
      const skillsW = skillsRef.current?.offsetWidth
      const screenWidth = window.innerWidth
      const skillElWidth = skillElementRef.current?.offsetWidth || 0
      setSkillsWidth(
        skillsRef.current?.offsetWidth! - screenWidth / 2 - skillElWidth / 2
      )
    }
    windowResizeHandler()
    window.addEventListener('resize', windowResizeHandler)
    return () => {
      window.removeEventListener('resize', windowResizeHandler)
    }
  }, [])

  return (
    <div ref={scrollRef} className={classes.scrollRoot}>
      <div className={classes.root}>
        <Stars progress={scrollYProgress} />
        <FloatingIcons progress={scrollYProgress} />
        <motion.div ref={skillsRef} style={{ x }} className={classes.skills}>
          <h2 className={classes.title}>My skills</h2>
          {skills.map((skill, index) => (
            <Skill
              ref={skillElementRef}
              key={index + skill.text}
              skill={skill}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
