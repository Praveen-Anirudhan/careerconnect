import { Briefcase, Users, TrendingUp } from "lucide-react";
const Stats = () => {
    return (
    <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/10 mb-4">
                <Briefcase className="h-6 w-6 text-cyan-500" />
              </div>
              <h3 className="text-3xl font-bold">1,000+</h3>
              <p className="text-muted-foreground">Active Jobs</p>
            </div>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/10 mb-4">
                <Users className="h-6 w-6 text-cyan-500" />
              </div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-muted-foreground">Companies</p>
            </div>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/10 mb-4">
                <TrendingUp className="h-6 w-6 text-cyan-500" />
              </div>
              <h3 className="text-3xl font-bold">10,000+</h3>
              <p className="text-muted-foreground">Success Stories</p>
            </div>
          </div>
        </div>
      </section>)
    
}

export default Stats;