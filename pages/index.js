import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Homepage from "@/components/Homepage";
import Me from "@/components/Me";
import Education from "@/components/Education";

export default function Home() {
  return (
   <div id="rumah">
    <Homepage />
    <Me />
    <Experience />
    <Education />
    <Contact />
   </div>
  );
}
