import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react"
import clsx from "clsx"
import dayjs from "dayjs"
import ExploreContainer from "../components/ExploreContainer"
import {Icon} from "@iconify/react"

const Home: React.FC = () => {
  const dates = [
    {date: dayjs().format(), totalHrs: "24:00", shift: 5},
    {date: dayjs().add(1, "day").format(), totalHrs: "24:00", shift: 5},
    {date: dayjs().add(2, "day").format(), totalHrs: "24:00", shift: 5},
    {date: dayjs().add(3, "day").format(), totalHrs: "24:00", shift: 5},
    {date: dayjs().add(4, "day").format(), totalHrs: "24:00", shift: 5},
    {date: dayjs().add(5, "day").format(), totalHrs: "24:00", shift: 5},
    {date: dayjs().add(6, "day").format(), totalHrs: "24:00", shift: 5},
    {date: dayjs().add(7, "day").format(), totalHrs: "24:00", shift: 5},
    {date: dayjs().add(8, "day").format(), totalHrs: "24:00", shift: 5},
    {date: dayjs().add(9, "day").format(), totalHrs: "24:00", shift: 5},
    {date: dayjs().add(10, "day").format(), totalHrs: "24:00", shift: 5},
    {date: dayjs().add(11, "day").format(), totalHrs: "24:00", shift: 5}
  ]
  const employees = [
    {
      name: "Steve smith",
      initial: "CG",
      totalHrs: "24:00",
      shift: "3",
      date: dayjs().format()
    },
    {
      name: "Henry",
      initial: "HM",
      totalHrs: "24:00",
      shift: "3",
      date: dayjs().add(1, "day").format()
    },
    {
      name: "Dhoni",
      initial: "MS",
      totalHrs: "24:00",
      shift: "3",
      date: dayjs().add(2, "day").format()
    },
    {
      name: " Virat",
      initial: "VK",
      totalHrs: "24:00",
      shift: "3",
      date: dayjs().format()
    }
  ]

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

    const ShiftCard: React.Fc = ({employeeDate, datesDate}) => {
      console.log("employeeDate :::", employeeDate)
      console.log("datesDate :::", datesDate)
      return (
        <>
          {employeeDate === datesDate ? (
            <div className="border border-[#FFD702] flex w-[95%] h-full m-1 rounded-[5px]">
              <span className="w-[5px] bg-[#FFD702] rounded-l-[5px] h-full"></span>
              <span className="text-[#3D3D3D] font-semibold rounded-r-[5px] pl-2">
                9.00a - 5.00p <span className="text-[#636363CC] font-normal">(8h)</span>
              </span>
            </div>
          ) : null}
        </>
      )
    }

    return (
      <div className="flex w-full h-[90%]">
        <div className="flex flex-col w-full ">
          {dates.map((datesValue: any, row: number) => {
            return (
              <div key={row} className="flex  border border-t-0 border-b-2 h-[30%]">
                {employees.map((value: any, col: number) => (
                  <div className={clsx("flex border  border-l-0  border-r-2 border-b-0 w-[50%]", {"border-t-2": row === 0, "border-t-0": row > 0})}>
                    {row === 0 && col === 0 && <ViewByEmployees />}
                    {row === 0 && col > 0 && <EmployeeCard {...value} />}
                    {row > 0 && col === 0 && <DateList {...datesValue} />}
                    {row > 0 && col > 0 && <ShiftCard employeeDate={dayjs(value.date).format("YYYY-MM-DD")} datesDate={dayjs(datesValue.date).format("YYYY-MM-DD")} />}
                  </div>
                ))}
              </div>
            )
          })}
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
              <Icon icon="ic:round-chevron-left" color="rgba(66, 82, 110, 0.5019607843137255)" width={40} height={35} />
              <span className="mb-0.5">Oct 31 - Nov 06 2022</span>
              <Icon icon="ic:round-chevron-right" color="rgba(66, 82, 110, 0.5019607843137255)" width={40} height={35} />
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
