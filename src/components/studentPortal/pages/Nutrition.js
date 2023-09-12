import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd';
import {MultiBackend} from 'react-dnd-multi-backend';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {TouchBackend} from 'react-dnd-touch-backend';
import StudentsInNavBar from "../Navbar/Navbar";
import Nutrition from '../Practicals/Nutrition/Nutrition';



const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend,
    },
    {
      backend: TouchBackend,
      options: { enableMouseEvents: true }, // Enable mouse events for touch
    },
  ],
};

const NutritionPage = () => {
  
    return (
      <>
        <StudentsInNavBar />
        <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        <Nutrition />
        </DndProvider>
      </>
    )
}

export default NutritionPage;