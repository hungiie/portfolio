"use client"

import { useState } from "react";
import ToggleButton from "@/components/toggle-button";
import JackalopeResearchContent from "./jackalope-research-content";

export default function JackalopeResearch() {
  // local state to track active/default
  const [isActive, setIsActive] = useState(false);

  const toggleResearch = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div>
      <ToggleButton 
        text={isActive ? "Hide Jackalope's research" : "View Jackalope's research"} 
        textSize="text-md" 
        onClick={toggleResearch} 
      />
      <JackalopeResearchContent visibility={isActive ? "visible" : "hidden"} />
    </div>
  );
}
