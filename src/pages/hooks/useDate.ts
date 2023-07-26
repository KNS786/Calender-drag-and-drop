import React from "react"
import dayjs from "dayjs"

export function useDate() {
  const [isVisited, setIsVisited] = React.useState<boolean>(false)

  const findEmpShiftDateForCell = (dates: any, employeeDate: any) => {
    console.log("dates :::", dates)
    console.log("employeeDate ::", employeeDate)
    const findEmpShift = dates.find((value) => dayjs(value).isSame(employeeDate))
    console.log("findEmpShift ::", findEmpShift)
    setIsVisited(!!findEmpShift)
    console.log("isVisited ::", isVisited)
    return !!findEmpShift
  }

  return {findEmpShiftDateForCell, isVisited}
}
