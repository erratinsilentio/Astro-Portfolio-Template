import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Assuming these constants are defined in your data file
import { ABOUT_HEADER_LOGO, ABOUT_HEADER_TITLE, PROJECTS } from "data";

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="min-h-screen bg-transparent p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <h1 className="flex items-center justify-center gap-2 text-3xl text-[40px] font-bold tracking-wider text-purple-300 sm:justify-start sm:text-[1.875rem] sm:tracking-normal">
          <span className="logo-slide-bounce-sm text-[50px] brightness-125 sm:text-[40px]">
            {ABOUT_HEADER_LOGO}
          </span>{" "}
          <a href="/">{ABOUT_HEADER_TITLE}</a>
        </h1>
        <div className="animate-fade-in">
          <Card className="border-purple-500/20 bg-transparent backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-purple-300">
                Project Showcase
              </CardTitle>
              <CardDescription className="text-purple-300/60">
                Explore our latest works and innovations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="mx-auto w-full max-w-4xl">
                <CarouselContent>
                  {PROJECTS.map((project, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="border-purple-500/20 bg-purple-950/20">
                          <CardHeader>
                            <img
                              src={project.image}
                              alt={project.title}
                              className="aspect-[16/9] w-full rounded-t-lg object-cover"
                            />
                          </CardHeader>
                          <CardContent>
                            <h3 className="mb-2 text-xl font-semibold text-purple-300">
                              {project.title}
                            </h3>
                            <p className="text-purple-300/60">
                              {project.description}
                            </p>
                          </CardContent>
                          <CardFooter>
                            <Button
                              variant="outline"
                              className="w-full border-purple-500/20 text-purple-700 hover:bg-purple-500/20 hover:text-purple-200"
                              onClick={() =>
                                window.open(project.link, "_blank")
                              }
                            >
                              View Project{" "}
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="text-purple-300 hover:bg-purple-500/20" />
                <CarouselNext className="text-purple-300 hover:bg-purple-500/20" />
              </Carousel>
            </CardContent>
          </Card>
        </div>
        <div className="mb-4 flex flex-col items-center justify-between sm:flex-row">
          <Button
            variant="default"
            className="mb-3 flex h-10 w-full items-center justify-center border border-solid border-purple-600/[.345] bg-purple-900 px-4 font-thin text-zinc-100 transition-colors hover:border-pink-100/[0.250] hover:bg-[#1a1a1a] hover:text-white sm:mb-0 sm:h-8 sm:w-[150px] sm:px-2 sm:text-base"
          >
            <a href="/" className="w-[150px]">
              Back to Home
            </a>
          </Button>
          <Button
            variant="default"
            className="flex h-10 w-full items-center justify-center border border-solid border-purple-600/[.345] bg-purple-900 px-4 font-thin text-zinc-100 transition-colors hover:border-pink-100/[0.250] hover:bg-[#1a1a1a] hover:text-white sm:h-8 sm:w-[150px] sm:px-2 sm:text-base"
          >
            <a href="/contact" className="w-[150px]">
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
