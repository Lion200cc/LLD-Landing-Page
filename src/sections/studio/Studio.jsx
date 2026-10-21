import StudioIntro from './StudioIntro.jsx';
import StudioFeatures from './StudioFeatures.jsx';
import StudioCreate from './StudioCreate.jsx';
import StudioRoom from './StudioRoom.jsx';
import StudioImageStates from './StudioImageStates.jsx';
import StudioOllama from './StudioOllama.jsx';
import StudioRoadmap from './StudioRoadmap.jsx';
import StudioTesters from './StudioTesters.jsx';
import './studio.css';

// Everything about LLD-Studio lives in this folder.
export default function Studio() {
  return (
    <div id="studio" className="studio product">
      <StudioIntro />
      <StudioFeatures />
      <StudioCreate />
      <StudioRoom />
      <StudioImageStates />
      <StudioOllama />
      <StudioRoadmap />
      <StudioTesters />
    </div>
  );
}
