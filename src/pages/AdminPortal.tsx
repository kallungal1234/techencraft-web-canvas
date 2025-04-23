
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Edit, X } from "lucide-react";
import { useNavigate } from 'react-router-dom';

interface Project {
  image: string;
  title: string;
  category: string;
  description: string;
}

const AdminPortal = () => {
  const [projects, setProjects] = useState<Project[]>([
    { image: "/lovable-uploads/banking.jpg", title: "Banking Domain", category: "Web Development", description: "A secure and modern banking solution." },
    { image: "/lovable-uploads/lowyer.jpeg", title: "Lowyers Diary", category: "Web Development", description: "Case and appointment management for law firms." },
    { image: "/lovable-uploads/school.png", title: "Schooling App", category: "Mobile Development", description: "Attendance, grading, and parent-teacher interaction." },
  ]);

  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
  };

  const handleUpdateProject = (updatedProject: Project) => {
    setProjects(projects.map(p => 
      p.title === editingProject?.title ? updatedProject : p
    ));
    setEditingProject(null);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Gallery Management</h1>
          <Button variant="outline" onClick={() => navigate('/')}>
            Back to Site
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-card rounded-lg shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
                <p className="mt-2 text-sm">{project.description}</p>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => handleEditProject(project)}
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Edit Project</SheetTitle>
                    </SheetHeader>
                    <div className="space-y-4 mt-4">
                      <div>
                        <label className="text-sm font-medium">Title</label>
                        <Input 
                          value={editingProject?.title} 
                          onChange={(e) => setEditingProject(prev => 
                            prev ? { ...prev, title: e.target.value } : null
                          )}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Category</label>
                        <Input 
                          value={editingProject?.category}
                          onChange={(e) => setEditingProject(prev => 
                            prev ? { ...prev, category: e.target.value } : null
                          )}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Description</label>
                        <Input 
                          value={editingProject?.description}
                          onChange={(e) => setEditingProject(prev => 
                            prev ? { ...prev, description: e.target.value } : null
                          )}
                        />
                      </div>
                      <Button 
                        className="w-full"
                        onClick={() => editingProject && handleUpdateProject(editingProject)}
                      >
                        Save Changes
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
