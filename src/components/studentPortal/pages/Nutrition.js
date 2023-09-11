import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import StudentsInNavBar from "../Navbar/Navbar";
import Nutrition from '../Practicals/Nutrition/Nutrition';

const NutritionPage = () => {
  
    return (
      <>
        <StudentsInNavBar />
        <DndProvider backend={HTML5Backend}>
        <Nutrition />
        </DndProvider>
      </>
    )
}

export default NutritionPage;