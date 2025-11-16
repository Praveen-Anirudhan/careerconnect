import NavBar from '../../components/NavBar.tsx'
import Hero from '../../components/Hero.tsx'
import Stats from '../../components/Stats.tsx';
import JobsPage from '../../components/JobsPage.tsx';
export default function Home() {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <Stats/>
            <JobsPage/>
        </div>
    );
}
