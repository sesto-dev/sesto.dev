import Socials from '../components/Socials'
import WorkCard from '../components/WorkCard'
import { useRouter } from 'next/router'

// Local Data
import Data from '../data/portfolio.json'
import Container from '../components/Container'
import Link from 'next/link'

export default function Home() {
    const { locale = Data['defaultLocale'] } = useRouter()

    return (
        <Container>
            <div
                className={`mt-10 laptop:text-7xl mob:text-6xl tablet:text-6xl text-bold ${
                    locale == 'fa' && 'text-right'
                }`}
            >
                <h1 className={`mb-4 `}>{Data['headerTaglineOne'][locale]}</h1>
                <h1 className="mb-4">{Data['headerTaglineTwo'][locale]}</h1>
                <h1 className="mb-4">{Data['headerTaglineThree'][locale]}</h1>
                <h1 className="mb-4">{Data['headerTaglineFour'][locale]}</h1>
            </div>
            <Socials locale={locale} className="mt-10" />
            <h1
                className={`mt-12 mb-2 text-2xl text-bold ${
                    locale == 'fa' && 'text-right'
                }`}
            >
                {locale == 'fa' ? 'رزومه' : 'Resume.'}
            </h1>
            <Link href="/resume">
                <p
                    className={`${
                        locale == 'fa' && 'text-right'
                    } px-8 py-4 bg-neutral-100 dark:bg-neutral-900 rounded-md my-4 hover:bg-neutral-900 hover:text-white
                    hover:dark:bg-neutral-100 hover:dark:text-black
                    transition-all duration-300`}
                >
                    {locale == 'fa'
                        ? 'برای مشاهده روزمه در این قسمت کلیک کنید'
                        : 'Click here to view my resume / CV'}
                </p>
            </Link>
            <div className="mt-10 laptop:mt-30">
                <h1
                    className={`text-2xl text-bold ${
                        locale == 'fa' && 'text-right'
                    }`}
                >
                    {locale == 'fa' ? 'پروژه ها' : 'Projects.'}
                </h1>
                <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
                    {Data.projects.map((project) => (
                        <WorkCard
                            key={project.title}
                            img={project.imageSrc}
                            name={project.title}
                            description={project.description}
                            slug={project.slug}
                            createdAt={project.createdAt}
                        />
                    ))}
                </div>
            </div>
            <div className="mt-10 laptop:mt-30">
                <h1
                    className={`text-2xl text-bold ${
                        locale == 'fa' && 'text-right'
                    }`}
                >
                    {locale == 'fa' ? 'بلاگ ها' : 'Blogs.'}
                </h1>
                <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
                    {Data.blogs.map((project) => (
                        <WorkCard
                            key={project.title}
                            img={project.imageSrc}
                            name={project.title}
                            description={project.description}
                            slug={project.slug}
                            createdAt={project.createdAt}
                        />
                    ))}
                </div>
            </div>
        </Container>
    )
}
