import { ChevronUpIcon } from '@heroicons/react/24/solid'
import type { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience';
import { PageInfo, Experience, Skill, Project, Social } from '../typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'
import { fetchProjects } from '../utils/fetchProjects'




type APIProps = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

type Props = {
  id: string;
  children: any;
  snap: any;
};

const Section = ({ id, children, snap }: Props) => (
  <section className={snap} id={id}>
    {children}
  </section>
)

const Home = ({ pageInfo, experiences, skills, socials, projects }: APIProps) => {


  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar-track-slate-300/20 scrollbar-thumb-[#e9bd5dc7] scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thin'>
      <Head>
        <title>{pageInfo?.name} Portfolio</title>
        <meta name="description" content="Portfolio of Giovanni Adorno" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header socials={socials} />
      {/* Hero */}
      <Section snap='snap-start' id='hero'>
        <Hero pageInfo={pageInfo} />
      </Section>

      {/* About */}
      <Section snap='snap-center' id='about'>
        <About pageInfo={pageInfo} />
      </Section>

      {/* Experiences */}
      <Section snap='snap-center' id='experience'>
        <WorkExperience experiences={experiences} />
      </Section>

      {/* Skills */}
      <Section snap='snap-start' id='skills'>
        <Skills skills={skills} />
      </Section>
      {/* Projects */}
      <Section snap='snap-start' id='projects' >
        <Projects projects={projects} />
      </Section>

      {/* Contact me */}
      <Section snap='snap-start' id='contact'>
        <ContactMe />
      </Section>
        <footer className='sticky bottom-5 w-full z-50'>
          <div className='flex items-center justify-center'>
<Link href='#hero'>
            <ChevronUpIcon 
            className='h-10 w-10 filter grayscale hover:grayscale-0 cursor-pointer'
            />
</Link>
          </div>
        </footer>
    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps<APIProps> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    // revalidate: 10,
  }
}