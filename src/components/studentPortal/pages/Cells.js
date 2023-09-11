import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import StudentsInNavBar from "../Navbar/Navbar";
import Cells from "../Practicals/cells/Cells";

const CellsPage = () => {
  
    return (
      <>
        <StudentsInNavBar />
        <DndProvider backend={HTML5Backend}>
        <Cells />
        </DndProvider>
      </>
    )
}

export default CellsPage;