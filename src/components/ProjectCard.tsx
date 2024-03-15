"use client";
import React from "react";

interface ProjectCardProps {
    children: React.ReactElement;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ children }) => {
    return (
        <div className="rounded-md border border-zinc-700 text-zinc-300">
            {children}
        </div>
    );
};

export default ProjectCard;
