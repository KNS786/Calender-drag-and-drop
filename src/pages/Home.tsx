import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react"
import React from "react"
import clsx from "clsx"
import dayjs from "dayjs"
import ExploreContainer from "../components/ExploreContainer"
import {Icon} from "@iconify/react"
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"

//hook
import {useDate} from "./hooks/useDate"

interface IDateRange {
  startDate: string
  endDate: string
}

const Home: React.FC = () => {
  //   const {findEmpShiftDateForCell, isVisited} = useDate()
  const findEmpShiftDateForCell = (dates: any, employeeDate: any) => {
    const findEmpShift = dates.find((value) => dayjs(value).isSame(employeeDate))
    const findEmpShiftIndex = dates.findIndex((value) => dayjs(value).isSame(employeeDate))
    return {findEmpShift: !!findEmpShift, findEmpShiftIndex}
  }

  const [weekDate, setWeekDate] = React.useState<IDateRange>({
    startDate: dayjs().startOf("week").format("YYYY-MM-DD"),
    endDate: dayjs().endOf("week").format("YYYY-MM-DD")
  })

  const handleNextWeekChange = (e: any) => {
    const {endDate: prevEndDate} = weekDate
    let startDate = dayjs(prevEndDate).add(1, "week").startOf("week").format("YYYY-MM-DD")
    let endDate = dayjs(prevEndDate).add(1, "week").endOf("week").format("YYYY-MM-DD")
    setWeekDate({startDate, endDate})
  }

  const handlePrevWeekChange = (e: any) => {
    const {endDate: prevEndDate} = weekDate
    let startDate = dayjs(prevEndDate).subtract(1, "week").startOf("week").format("YYYY-MM-DD")
    let endDate = dayjs(prevEndDate).subtract(1, "week").endOf("week").format("YYYY-MM-DD")
    setWeekDate({startDate, endDate})
  }

  const generateDates = (startDate: string, endDate: string) => {
    let dates = [{}]
    // const dates = [
    //   {date: dayjs().format(), totalHrs: "24:00", shift: 5},
    //   {date: dayjs().add(1, "day").format(), totalHrs: "24:00", shift: 5},
    //   {date: dayjs().add(2, "day").format(), totalHrs: "24:00", shift: 5},
    //   {date: dayjs().add(3, "day").format(), totalHrs: "24:00", shift: 5},
    //   {date: dayjs().add(4, "day").format(), totalHrs: "24:00", shift: 5},
    //   {date: dayjs().add(5, "day").format(), totalHrs: "24:00", shift: 5},
    //   {date: dayjs().add(6, "day").format(), totalHrs: "24:00", shift: 5},
    //   {date: dayjs().add(7, "day").format(), totalHrs: "24:00", shift: 5},
    //   {date: dayjs().add(8, "day").format(), totalHrs: "24:00", shift: 5},
    //   {date: dayjs().add(9, "day").format(), totalHrs: "24:00", shift: 5},
    //   {date: dayjs().add(10, "day").format(), totalHrs: "24:00", shift: 5},
    //   {date: dayjs().add(11, "day").format(), totalHrs: "24:00", shift: 5}
    // ]

    let currDate = startDate

    while (dayjs(currDate).isSame(endDate) || dayjs(currDate).isBefore(endDate)) {
      dates.push({date: currDate, totalHrs: "24:00", shift: 5})
      currDate = dayjs(currDate).add(1, "day").format("YYYY-MM-DD")
    }
    return dates
  }

  const [dates, setDates] = React.useState<any>(generateDates(dayjs().startOf("week").format("YYYY-MM-DD"), dayjs().endOf("week").format("YYYY-MM-DD")))
  React.useEffect(() => {
    if (weekDate.startDate) {
      setDates(generateDates(weekDate.startDate, weekDate.endDate))
    }
  }, [weekDate])

  const responseData = [
    {
      name: "Steve smith",
      initial: "CG",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().format("YYYY-MM-DD")]
    },
    {
      name: "Henry",
      initial: "HM",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().add(1, "day").format("YYYY-MM-DD"), dayjs().add(2, "day").format("YYYY-MM-DD")]
    },
    {
      name: "Dhoni",
      initial: "MS",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().add(2, "day").format("YYYY-MM-DD")]
    },
    {
      name: " Virat",
      initial: "VK",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().add(3, "day").format("YYYY-MM-DD")]
    }
  ]

  const [employees, setEmployees] = React.useState<any>(responseData)

  const Calender: React.FC = ({dates, employees, align = "vertical"}) => {
    let Table = {
      header: align === "vertical" ? dates : employees,
      sidebar: align === "vertical" ? employees : dates
    }

    const ViewByEmployees: React.FC = () => (
      <div className="w-44 h-14 sticky right-0">
        <span className="flex gap-1 items-center border w-max px-2 m-auto mt-3 p-1 text-xs rounded-[15px]">
          View by <span className="font-semibold"> employees</span>
          <Icon icon="material-symbols:arrow-drop-down" width={27} />
        </span>
      </div>
    )

    const EmployeeCard: React.FC = ({name, initial, totalHrs, shift}) => {
      return (
        <div className="flex flex-col">
          <div className="flex w-44 h-14">
            <div className="flex  items-center m-auto gap-2">
              <span className="w-[35px] rounded-full px-2 py-1.5 h-[35px] text-white bg-black">CG</span>
              <div className="">
                <span className="">
                  {name}{" "}
                  <span className="flex gap-2">
                    <span className="text-[#253858] gap-0.5  flex items-center font-semibold">
                      {" "}
                      <Icon icon="ri:time-line" color="#ccc" className="mt-0.5" />
                      {totalHrs}
                    </span>{" "}
                    <span className="text-[#5C5C5C] gap-0.5 flex items-center">
                      <Icon icon="eva:calendar-outline" color="#ccc" />
                      {shift}
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    }

    const DateList: React.FC = ({date, totalHrs, shift}) => {
      return (
        <div className="w-44 h-14 flex flex-col justify-center items-center ">
          <span>{dayjs(date).format("ddd MM/DD")}</span>
          <span className="flex gap-2">
            <span className="text-[#253858] flex items-center font-semibold gap-1">
              {" "}
              <Icon icon="ri:time-line" color="#ccc" />
              {totalHrs}
            </span>{" "}
            <span className="text-[#5C5C5C] gap-1 flex items-center">
              <Icon icon="eva:calendar-outline" color="#ccc" />3
            </span>{" "}
            <span className="flex gap-1 items-center">
              <Icon icon="ph:user-duotone" color="rgba(151, 151, 151, 0.7490196078431373)" />
              {shift}
            </span>
          </span>
        </div>
      )
    }

    // const ShiftCard: React.Fc = ({employeeDate, datesDate}) => {
    //   return (
    //     <>
    //       {employeeDate === datesDate ? (
    //         <div className="border border-[#FFD702] flex w-[95%] h-full m-1 rounded-[5px]">
    //           <span className="w-[5px] bg-[#FFD702] rounded-l-[5px] h-full"></span>
    //           <span className="text-[#3D3D3D] font-semibold rounded-r-[5px] pl-2">
    //             9.00a - 5.00p <span className="text-[#636363CC] font-normal">(8h)</span>
    //           </span>
    //         </div>
    //       ) : (
    //         <h1>hello</h1>
    //       )}
    //     </>
    //   )
    // }
    const ShiftCard: React.Fc = () => {
      return (
        <div className="border border-[#FFD702] flex w-[95%] h-full m-1 rounded-[5px]">
          <span className="w-[5px] bg-[#FFD702] rounded-l-[5px] h-full"></span>
          <span className="text-[#3D3D3D] font-semibold rounded-r-[5px] pl-2">
            9.00a - 5.00p <span className="text-[#636363CC] font-normal">(8h)</span>
          </span>
        </div>
      )
    }

    const handleDragEnd = (result: any) => {
      const {source, destination} = result
      if (destination) {
        const startPosition = JSON.parse(source.droppableId)
        const targetPosition = JSON.parse(destination.droppableId)

        const employeeList = Array.from(employees)
        const [movedItem] = employeeList[startPosition.col].dates.splice(startPosition.cardIndx, 1)
        const reOrderItems = employeeList[targetPosition.col].dates.push(targetPosition.date)
        setEmployees(employeeList)
      }
    }

    return (
      <div className="flex w-full h-[90%]">
        <div className="flex flex-col w-full ">
          <DragDropContext onDragEnd={handleDragEnd}>
            {dates.map((datesValue: any, row: number) => {
              return (
                <div key={row} className="flex  border border-t-0 border-b-2 h-[30%]">
                  {employees.map((empValue: any, col: number) => {
                    const {findEmpShift, findEmpShiftIndex} = findEmpShiftDateForCell(empValue.dates, datesValue.date)
                    const cardPosition = `{"cardIndex":${findEmpShiftIndex},"row":${row},"col":${col},"date":"${datesValue.date}"}`

                    return (
                      <div key={`row-${col}`} className={clsx("flex border  border-l-0  border-r-2 border-b-0 w-[50%]", {"border-t-2": row === 0, "border-t-0": row > 0})}>
                        {row === 0 && col === 0 && <ViewByEmployees />}
                        {row === 0 && col > 0 && <EmployeeCard {...empValue} />}
                        {row > 0 && col === 0 && <DateList {...datesValue} />}
                        {row > 0 && col > 0 && (
                          <div key={`row:${row}-col:${col}-layers`} className="flex">
                            {findEmpShift ? (
                              <Droppable key={`{"cardIndx":${findEmpShiftIndex},"row":${row},"col":${col},"date":"${datesValue.date}"}`} droppableId={`{"cardIndx":${findEmpShiftIndex},"row":${row},"col":${col},"date":"${datesValue.date}"}`}>
                                {(provided) => (
                                  <div {...provided.droppableProps} ref={provided.innerRef} className="flex">
                                    <Draggable key={cardPosition} draggableId={cardPosition} index={findEmpShiftIndex}>
                                      {(datas) => (
                                        <div {...datas.draggableProps} {...datas.dragHandleProps} ref={datas.innerRef} className="flex">
                                          <ShiftCard />
                                        </div>
                                      )}
                                    </Draggable>
                                    {provided.placeholder}
                                  </div>
                                )}
                              </Droppable>
                            ) : (
                              <Droppable key={`{"cardIndx":${findEmpShiftIndex},"row":${row},"col":${col},"date":"${datesValue.date}"}`} droppableId={`{"cardIndx":${findEmpShiftIndex},"row":${row},"col":${col},"date":"${datesValue.date}"}`}>
                                {(provided) => (
                                  <div {...provided.droppableProps} ref={provided.innerRef}>
                                    <Draggable key={cardPosition} draggableId={cardPosition} index={findEmpShiftIndex}>
                                      {(datas) => (
                                        <div {...datas.draggableProps} {...datas.dragHandleProps} ref={datas.innerRef} className="flex">
                                          <h1>hello</h1>
                                        </div>
                                      )}
                                    </Draggable>
                                    {provided.placeholder}
                                  </div>
                                )}
                              </Droppable>
                            )}

                            {/* {findEmpShiftDateForCell(empValue.dates, datesValue.date) ? (
                              <>
                                {empValue.dates.map((employeeDate: string, index: number) => {
                                  const cardPosition = `'{"cardIndex":${index},"row":${row},"col":${col}}'`

                                  return (
                                    <Droppable key={`cardIndx-${index}-row-${row}-col-${col}`} droppableId={`cardIndx-${index}-row-${row}-col-${col}`}>
                                      {(provided) => (
                                        <div {...provided.droppableProps} ref={provided.innerRef} className="flex">
                                          <Draggable key={cardPosition} draggableId={cardPosition} index={index}>
                                            {(datas) => (
                                              <div {...datas.draggableProps} {...datas.dragHandleProps} ref={datas.innerRef} className="flex">
                                                <ShiftCard key={index} employeeDate={dayjs(employeeDate).format("YYYY-MM-DD")} datesDate={dayjs(datesValue.date).format("YYYY-MM-DD")} />
                                              </div>
                                            )}
                                          </Draggable>
                                          {provided.placeholder}
                                        </div>
                                      )}
                                    </Droppable>
                                  )
                                })}
                              </>
                            ) : (
                              <h1>hover</h1>
                            )} */}

                            {/* {empValue.dates.map((employeeDate: string, index: number) => {
                              const cardPosition = `'{"cardIndex":${index},"row":${row},"col":${col}}'`

                              return (
                                <Droppable key={`cardIndx-${index}-row-${row}-col-${col}`} droppableId={`cardIndx-${index}-row-${row}-col-${col}`}>
                                  {(provided) => (
                                    <div {...provided.droppableProps} ref={provided.innerRef} className="flex">
                                      <Draggable key={cardPosition} draggableId={cardPosition} index={index}>
                                        {(datas) => (
                                          <div {...datas.draggableProps} {...datas.dragHandleProps} ref={datas.innerRef} className="flex">
                                            <ShiftCard key={index} employeeDate={dayjs(employeeDate).format("YYYY-MM-DD")} datesDate={dayjs(datesValue.date).format("YYYY-MM-DD")} />
                                          </div>
                                        )}
                                      </Draggable>
                                      {provided.placeholder}
                                    </div>
                                  )}
                                </Droppable>
                              )
                            })} */}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </DragDropContext>
        </div>
      </div>
    )
  }

  return (
    <IonPage>
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center w-full ">
          <div className="flex gap-5 items-center m-5 text-sm ">
            <div className="border rounded-[15px] flex w-full items-center ">
              <Icon icon="ic:round-chevron-left" color="rgba(66, 82, 110, 0.5019607843137255)" width={40} height={35} onClick={handlePrevWeekChange} />
              <span className="mb-0.5">{`${dayjs(weekDate.startDate).format("MMM DD")} - ${dayjs(weekDate.endDate).format("MMM DD YYYY")}`}</span>
              <Icon icon="ic:round-chevron-right" color="rgba(66, 82, 110, 0.5019607843137255)" width={40} height={35} onClick={handleNextWeekChange} />
            </div>
            <Icon icon="ph:swap" color="#007dff" width={80} className="-ml-3 h-6" />
          </div>
          <div className="flex gap-5 mr-5">
            <div className="w-10 h-10 border shadow-md rounded-full ml-5 stroke-[#E2E3E5] stroke-[1px] box-shadow-2xl">
              <Icon icon="ph:warning-circle-light" color="#ec445a" className="m-auto mt-1" width={30} />
            </div>
            <span className="text-sm w-25 h-10 shadow-md text-[#3880ff] flex items-top border px-3 py-2 rounded-full font-semibold">
              {" "}
              Action <Icon icon="ant-design:caret-down-filled" color="#3880ff" width={20} className=" mt-0.5" />
            </span>
            <span className="text-sm w-25 h-10 shadow-md border px-3 py-2 rounded-full bg-[#007DFF] text-white font-semibold">Publish (4)</span>
            <span className="text-sm w-25 h-10 shadow-md flex items-top border px-3 py-2 rounded-full bg-[#007DFF] text-white font-semibold">
              <Icon icon="material-symbols:add" color="white" width={20} className="" /> Add Shift
            </span>
          </div>
        </div>

        <div className="flex calender-section h-full ">
          <Calender dates={dates} employees={employees} />
        </div>
      </div>
    </IonPage>
  )
}

export default Home
