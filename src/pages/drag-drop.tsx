import React, {useRef, useEffect} from "react"
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"

const DragAndDrop: React.Fc = () => {
  const Row = ({handleClick, cardIndex}) => {
    return (
      <div onClick={handleClick} className="flex my-2 border  ">
        <h1>{cardIndex}</h1>
      </div>
    )
  }

  const [table, setTable] = React.useState<any>([1, 2, 3, 4, 5])

  const handleClickedCard = (card: any) => {
    console.log("handleClickedCard :::", card)
  }

  const handleReOrderTable = (result: any) => {
    const {source, destination} = result
    const data = Array.from(table)
    const [item] = data.splice(source.index, 1)
    const reOrderedItems = data.splice(destination.index, 0, item)
    setTable(data)
  }

  return (
    <div className="flex flex-col my-44 mx-4">
      <DragDropContext onDragEnd={handleReOrderTable}>
        <Droppable droppableId="Today" type="PERSON">
          {(provided) => (
            <div className=" border border-red-600 px-2 flex flex-col shifts-1 list" {...provided.droppableProps} ref={provided.innerRef}>
              {provided.placeholder}
              {table.map((value: number, index: number) => {
                return (
                  <Draggable type="Today" key={value} draggableId={value.toString()} index={index}>
                    {(provided) => (
                      <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <Row cardIndex={value} handleClick={() => handleClickedCard({clickedCard: value})} />
                      </div>
                    )}
                  </Draggable>
                  //   <Row key={index} cardIndex={value} handleClick={() => handleClickedCard({clickedCard: value})} />
                )
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default DragAndDrop
