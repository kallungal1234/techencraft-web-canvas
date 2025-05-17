
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Edit, Plus, X } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface Project {
  image: string;
  title: string;
  category: string;
  description: string;
}

const AdminPortal = () => {
  const [projects, setProjects] = useState<Project[]>([
    { image: "/lovable-uploads/bank.jpeg", title: "Banking Domain", category: "Web Development", description: "A secure and modern banking solution." },
    { image: "/lovable-uploads/lowyer.jpeg", title: "Lowyers Diary", category: "Web Development", description: "Case and appointment management for law firms." },
    { image: "/lovable-uploads/school.png", title: "Schooling App", category: "Mobile Development", description: "Attendance, grading, and parent-teacher interaction." },
    { image: "/lovable-uploads/matrimoniyal.jpeg", title: "Indian Matrimonial", category: "Mobile Development", description: "Modern matchmaking with cultural integration." },
    { image: "/lovable-uploads/educational.jpg", title: "Educational Platform", category: "Mobile Development", description: "Course management and LMS features." },
    { image: "/lovable-uploads/mrf_image.jpeg", title: "MRF Tyre Retreading", category: "ERP Application", description: "Complete retreading process tracking system." },
    { image: "/lovable-uploads/tution.png", title: "Online Learning Platform", category: "Web Development", description: "The Best Online Tuition and Scholarship-Based Learning App." },
    { image: "/lovable-uploads/restaurant.png", title: "A vibrant and responsive website", category: "Mobile Development", description: "For a Canadian-based South Indian restaurant." },
    { image: "/lovable-uploads/learns.png", title: "Dr. Dan's LEARNS", category: "Custom web application", description: "Nurturing young minds through play and creativity." },
    { image: "/lovable-uploads/bfd5ec07-c4dd-4453-81c3-754563280891.png", title: "Industrial Cooling Solutions", category: "Industrial Equipment", description: "Stockist & Supplier of high-quality Cooling Towers, ABS/PVC Fills, Fans, Pumps, Nozzles, Sprinklers, and more." },
  ]);

  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [newProject, setNewProject] = useState<Project>({
    image: "",
    title: "",
    category: "",
    description: ""
  });
  const [isAddingNew, setIsAddingNew] = useState(false);
  const navigate = useNavigate();

  const handleEditProject = (project: Project) => {
    setEditingProject({...project});
  };

  const handleUpdateProject = (updatedProject: Project) => {
    setProjects(projects.map(p => 
      p.title === editingProject?.title ? updatedProject : p
    ));
    setEditingProject(null);
    toast.success("Project updated successfully");
  };

  const handleAddProject = () => {
    if (!newProject.title || !newProject.category || !newProject.description || !newProject.image) {
      toast.error("Please fill all fields");
      return;
    }
    
    setProjects([...projects, newProject]);
    setNewProject({
      image: "",
      title: "",
      category: "",
      description: ""
    });
    setIsAddingNew(false);
    toast.success("Project added successfully");
  };

  const handleDeleteProject = (projectToDelete: Project) => {
    setProjects(projects.filter(project => project.title !== projectToDelete.title));
    toast.success("Project deleted successfully");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Gallery Management</h1>
          <div className="flex gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button onClick={() => setIsAddingNew(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Project
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Add New Project</SheetTitle>
                </SheetHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <label className="text-sm font-medium">Image URL</label>
                    <Input 
                      placeholder="e.g. /lovable-uploads/image.jpg"
                      value={newProject.image}
                      onChange={(e) => setNewProject(prev => ({ ...prev, image: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Title</label>
                    <Input 
                      placeholder="Project Title"
                      value={newProject.title}
                      onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Category</label>
                    <Input 
                      placeholder="e.g. Web Development"
                      value={newProject.category}
                      onChange={(e) => setNewProject(prev => ({ ...prev, category: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <Textarea 
                      placeholder="Project description"
                      value={newProject.description}
                      onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))}
                    />
                  </div>
                  <Button 
                    className="w-full"
                    onClick={handleAddProject}
                  >
                    Add Project
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            <Button variant="outline" onClick={() => navigate('/')}>
              Back to Site
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
                <p className="mt-2 text-sm line-clamp-2">{project.description}</p>
                <div className="flex justify-between mt-4">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button 
                        variant="outline" 
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
                          <label className="text-sm font-medium">Image URL</label>
                          <Input 
                            value={editingProject?.image} 
                            onChange={(e) => setEditingProject(prev => 
                              prev ? { ...prev, image: e.target.value } : null
                            )}
                          />
                        </div>
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
                          <Textarea 
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
                  <Button 
                    variant="destructive"
                    onClick={() => handleDeleteProject(project)}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
