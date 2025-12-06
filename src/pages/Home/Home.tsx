import NavBar from "../../components/NavBar.tsx";
import Hero from "../../components/Hero.tsx";
import Stats from "../../components/Stats.tsx";
import JobsCardPage from "../../components/JobsCardPage.tsx";
import Footer from "../../components/Footer.tsx";
const HomePage = () => {
  const featuredJobs = jobs.slice(0, 3);

  return (
    <div>
      <Hero />
      <Stats />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredJobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href="/jobs"
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg inline-block"
            >
              View All Jobs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// My Applications Page (placeholder)
const MyApplicationsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">My Applications</h1>
      <p className="text-gray-600">This page is under construction</p>
    </div>
  );
};

export default function Home() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/my-applications" element={<MyApplicationsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
