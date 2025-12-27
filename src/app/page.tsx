import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Briefcase, Building, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { featuredJobs } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-students');

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-10"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-primary">
              Find Your Future, Faster.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              GradLink is the exclusive platform connecting ambitious graduates with innovative companies for opportunities that launch careers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/jobs">
                  Browse Jobs <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link href="/signup">
                  Post a Job
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-headline text-primary">For Students & Graduates</h2>
              <p className="mt-4 text-muted-foreground">
                Your career starts here. Build a standout profile, showcase your skills, and get discovered by top companies looking for fresh talent.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <Briefcase className="h-6 w-6 text-accent mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Curated Opportunities</h3>
                    <p className="text-muted-foreground text-sm">Access entry-level roles and internships you won&apos;t find anywhere else.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-accent mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Direct Company Access</h3>
                    <p className="text-muted-foreground text-sm">Apply directly and track your application status from one dashboard.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold font-headline text-primary">For Recruiters</h2>
              <p className="mt-4 text-muted-foreground">
                Tap into a pool of bright, motivated graduates ready to make an impact. Post jobs, manage candidates, and build your future workforce.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <Building className="h-6 w-6 text-accent mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Quality Candidates</h3>
                    <p className="text-muted-foreground text-sm">Find skilled graduates from diverse fields eager to grow.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Briefcase className="h-6 w-6 text-accent mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Streamlined Hiring</h3>
                    <p className="text-muted-foreground text-sm">Post jobs easily and manage your hiring pipeline efficiently.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline text-primary">Featured Job Openings</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Get a glimpse of the exciting opportunities waiting for you on GradLink.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-headline">{job.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Building className="h-4 w-4" /> {job.companyName}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {job.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">{job.location}</Badge>
                    <Badge variant="secondary">{job.type}</Badge>
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild className="w-full font-semibold">
                    <Link href={`/jobs/${job.id}`}>View Details</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/jobs">
                See All Jobs
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
