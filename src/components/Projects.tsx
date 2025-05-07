
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Sky Premium (Magento EE)",
    description: "Developed mobile API, implemented CRM synchronization, built GraphQL endpoints, and integrated OneSignal push notifications.",
    image: "https://placehold.co/600x400/3b82f6/FFFFFF?text=Sky+Premium",
    technologies: ["Magento EE", "GraphQL", "OneSignal", "API Integration"],
  },
  {
    title: "LAB Fintech",
    description: "Built Power Platform solutions including BI dashboards and automated workflows for financial operations.",
    image: "https://placehold.co/600x400/4f46e5/FFFFFF?text=LAB+Fintech",
    technologies: ["Power Platform", "Power BI", "Power Automate", "Dashboard Design"],
  },
  {
    title: "Seconds Deals",
    description: "Integrated third-party shipping APIs and enhanced frontend experiences for an e-commerce platform.",
    image: "https://placehold.co/600x400/10b981/FFFFFF?text=Seconds+Deals",
    technologies: ["API Integration", "Frontend Enhancement", "E-commerce", "Shipping"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-navy-800">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {tech}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
