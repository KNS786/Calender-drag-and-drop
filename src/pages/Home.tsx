import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react"
import ExploreContainer from "../components/ExploreContainer"
import { Icon } from '@iconify/react';
const Home: React.FC = () => {
  return (
    <IonPage>
      <div>
        <div className="flex justify-between items-center w-full ">
          <div className="flex gap-5 items-center m-5 text-sm ">
            <div className="border rounded-[15px] flex w-full items-center ">
              <Icon
                icon="ic:round-chevron-left"
                color="rgba(66, 82, 110, 0.5019607843137255)"
                width={40}
                height={35}
              />
              <span className="mb-0.5">Oct 31 - Nov 06 2022</span>
              <Icon
                icon="ic:round-chevron-right"
                color="rgba(66, 82, 110, 0.5019607843137255)"
                width={40}
                height={35}
              />
            </div>
            <Icon
              icon="ph:swap"
              color="#007dff"
              width={80}
              className="-ml-3 h-6"
            />
          </div>
          <div className="flex gap-5 mr-5">
            <div className="w-10 h-10 border shadow-md rounded-full ml-5 stroke-[#E2E3E5] stroke-[1px] box-shadow-2xl">
              <Icon
                icon="ph:warning-circle-light"
                color="#ec445a"
                className="m-auto mt-1"
                width={30}
              />
            </div>
            <span className="text-sm w-25 h-10 shadow-md text-[#3880ff] flex items-top border px-3 py-2 rounded-full font-semibold">
              {" "}
              Action{" "}
              <Icon
                icon="ant-design:caret-down-filled"
                color="#3880ff"
                width={20}
                className=" mt-0.5"
              />
            </span>
            <span className="text-sm w-25 h-10 shadow-md border px-3 py-2 rounded-full bg-[#007DFF] text-white font-semibold">
              Publish (4)
            </span>
            <span className="text-sm w-25 h-10 shadow-md flex items-top border px-3 py-2 rounded-full bg-[#007DFF] text-white font-semibold">
              <Icon
                icon="material-symbols:add"
                color="white"
                width={20}
                className=""
              />{" "}
              Add Shift
            </span>
          </div>
        </div>

        {/* <div className="w-max h-max  overflow-x-auto  box-shadow-b-md ">
        <div className="border text-sm flex overflow-x-auto w-max shadow-lg mb-2">
          <div className="border w-44 h-14 sticky right-0">
           <span className="flex gap-1 items-center border w-max px-2 m-auto mt-3 p-1 text-xs rounded-[15px]">View by <span className="font-semibold"> employees</span><Icon icon="material-symbols:arrow-drop-down" width={27} /></span>
          </div>
          <div className="flex border w-44 h-14">
            <div className="flex  items-center m-auto gap-2">
             <span className="w-[35px] rounded-full pl-1 h-[35px] text-white bg-black">CG</span>
             <div className="">
               <span className="">Steven Smith <span className="flex gap-2"><span className="text-[#253858] gap-0.5  flex items-center font-semibold"> <Icon icon="ri:time-line" color="#ccc" className="mt-0.5" />24:00</span> <span className="text-[#5C5C5C] gap-0.5 flex items-center"><Icon icon="eva:calendar-outline" color="#ccc" />3</span></span></span>
             </div>
            </div>
          </div> */}

        <div className="text-sm  ">
          <div className=" flex">
            <div className="flex flex-col w-full sticky right-0">
              <div className="border w-44 h-14 sticky right-0">
                <span className="flex gap-1 items-center border w-max px-2 m-auto mt-3 p-1 text-xs rounded-[15px]">
                  View by <span className="font-semibold"> employees</span>
                  <Icon icon="material-symbols:arrow-drop-down" width={27} />
                </span>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <span>Mon 10/31</span>
                <span className="flex gap-2">
                  <span className="text-[#253858] flex items-center font-semibold gap-1">
                    {" "}
                    <Icon icon="ri:time-line" color="#ccc" />
                    24:00
                  </span>{" "}
                  <span className="text-[#5C5C5C] gap-1 flex items-center">
                    <Icon icon="eva:calendar-outline" color="#ccc" />3
                  </span>{" "}
                  <span className="flex gap-1 items-center">
                    <Icon
                      icon="ph:user-duotone"
                      color="rgba(151, 151, 151, 0.7490196078431373)"
                    />
                    5
                  </span>
                </span>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <span>Mon 10/31</span>
                <span className="flex gap-2">
                  <span className="text-[#253858] flex items-center font-semibold gap-1">
                    {" "}
                    <Icon icon="ri:time-line" color="#ccc" />
                    24:00
                  </span>{" "}
                  <span className="text-[#5C5C5C] gap-1 flex items-center">
                    <Icon icon="eva:calendar-outline" color="#ccc" />3
                  </span>{" "}
                  <span className="flex gap-1 items-center">
                    <Icon
                      icon="ph:user-duotone"
                      color="rgba(151, 151, 151, 0.7490196078431373)"
                    />
                    5
                  </span>
                </span>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <span>Mon 10/31</span>
                <span className="flex gap-2">
                  <span className="text-[#253858] flex items-center font-semibold gap-1">
                    {" "}
                    <Icon icon="ri:time-line" color="#ccc" />
                    24:00
                  </span>{" "}
                  <span className="text-[#5C5C5C] gap-1 flex items-center">
                    <Icon icon="eva:calendar-outline" color="#ccc" />3
                  </span>{" "}
                  <span className="flex gap-1 items-center">
                    <Icon
                      icon="ph:user-duotone"
                      color="rgba(151, 151, 151, 0.7490196078431373)"
                    />
                    5
                  </span>
                </span>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <span>Mon 10/31</span>
                <span className="flex gap-2">
                  <span className="text-[#253858] flex items-center font-semibold gap-1">
                    {" "}
                    <Icon icon="ri:time-line" color="#ccc" />
                    24:00
                  </span>{" "}
                  <span className="text-[#5C5C5C] gap-1 flex items-center">
                    <Icon icon="eva:calendar-outline" color="#ccc" />3
                  </span>{" "}
                  <span className="flex gap-1 items-center">
                    <Icon
                      icon="ph:user-duotone"
                      color="rgba(151, 151, 151, 0.7490196078431373)"
                    />
                    5
                  </span>
                </span>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <span>Mon 10/31</span>
                <span className="flex gap-2">
                  <span className="text-[#253858] flex items-center font-semibold gap-1">
                    {" "}
                    <Icon icon="ri:time-line" color="#ccc" />
                    24:00
                  </span>{" "}
                  <span className="text-[#5C5C5C] gap-1 flex items-center">
                    <Icon icon="eva:calendar-outline" color="#ccc" />3
                  </span>{" "}
                  <span className="flex gap-1 items-center">
                    <Icon
                      icon="ph:user-duotone"
                      color="rgba(151, 151, 151, 0.7490196078431373)"
                    />
                    5
                  </span>
                </span>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <span>Mon 10/31</span>
                <span className="flex gap-2">
                  <span className="text-[#253858] flex items-center font-semibold gap-1">
                    {" "}
                    <Icon icon="ri:time-line" color="#ccc" />
                    24:00
                  </span>{" "}
                  <span className="text-[#5C5C5C] gap-1 flex items-center">
                    <Icon icon="eva:calendar-outline" color="#ccc" />3
                  </span>{" "}
                  <span className="flex gap-1 items-center">
                    <Icon
                      icon="ph:user-duotone"
                      color="rgba(151, 151, 151, 0.7490196078431373)"
                    />
                    5
                  </span>
                </span>
              </div>

              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <span>Mon 10/31</span>
                <span className="flex gap-2">
                  <span className="text-[#253858] flex items-center font-semibold gap-1">
                    {" "}
                    <Icon icon="ri:time-line" color="#ccc" />
                    24:00
                  </span>{" "}
                  <span className="text-[#5C5C5C] gap-1 flex items-center">
                    <Icon icon="eva:calendar-outline" color="#ccc" />3
                  </span>{" "}
                  <span className="flex gap-1 items-center">
                    <Icon
                      icon="ph:user-duotone"
                      color="rgba(151, 151, 151, 0.7490196078431373)"
                    />
                    5
                  </span>
                </span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex border w-44 h-14">
                <div className="flex  items-center m-auto gap-2">
                  
                  
                    <span className="text-[#42526E] font-semibold">
                      Unassigned Shifts
                      </span>
                  </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#FFD702] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FFD702] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D] font-semibold rounded-r-[5px] pl-2">
                    9.00a - 5.00p{" "}
                    <span className="text-[#636363CC] font-normal">(8h)</span>
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
            </div>

            <div className="flex flex-col">
              <div className="flex border w-44 h-14">
                <div className="flex  items-center m-auto gap-2">
                  <span className="w-[35px] rounded-full px-2 py-1.5 h-[35px] text-white bg-black">
                    CG
                  </span>
                  <div className="">
                    <span className="">
                      Steven Smith{" "}
                      <span className="flex gap-2">
                        <span className="text-[#253858] gap-0.5  flex items-center font-semibold">
                          {" "}
                          <Icon
                            icon="ri:time-line"
                            color="#ccc"
                            className="mt-0.5"
                          />
                          24:00
                        </span>{" "}
                        <span className="text-[#5C5C5C] gap-0.5 flex items-center">
                          <Icon icon="eva:calendar-outline" color="#ccc" />3
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#FFD702] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FFD702] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D] font-semibold rounded-r-[5px] pl-2">
                    9.00a - 5.00p{" "}
                    <span className="text-[#636363CC] font-normal">(8h)</span>
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#FFD702] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FFD702] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D] bg-[#FFFDF0] rounded-r-[5px] w-full font-semibold pl-2">
                    9.00a - 5.00p{" "}
                    <span className="text-[#636363CC] font-normal">(8h)</span>
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#FFD702] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FFD702] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D] bg-[#FFFDF0] rounded-r-[5px] w-full font-semibold pl-2">
                    9.00a - 5.00p{" "}
                    <span className="text-[#636363CC] font-normal">(8h)</span>
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-transparent flex w-[95%]  gap-1 h-full m-1 rounded-[5px] items-center justify-flex start mt-0">
                  <Icon icon="ic:outline-circle" color="#ec7d22" width={27} />
                  <span className="text-[#777777]  w-full font-semibold ">
                    Sick Leave (8h)
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
            </div>

            <div className="flex flex-col">
              <div className="flex border w-44 h-14">
                <div className="flex  items-center m-auto gap-2">
                  <span className="w-[35px] rounded-full px-2 py-1.5 h-[35px] text-white bg-black">
                    CG
                  </span>
                  <div className="">
                    <span className="">
                      Steven Smith{" "}
                      <span className="flex gap-2">
                        <span className="text-[#253858] gap-0.5  flex items-center font-semibold">
                          {" "}
                          <Icon
                            icon="ri:time-line"
                            color="#ccc"
                            className="mt-0.5"
                          />
                          24:00
                        </span>{" "}
                        <span className="text-[#5C5C5C] gap-0.5 flex items-center">
                          <Icon icon="eva:calendar-outline" color="#ccc" />3
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#FFD702] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FFD702] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D] w-full bg-[#FFFDF0] font-semibold rounded-r-[5px] pl-2">
                    9.00a - 1.00p{" "}
                    <span className="text-[#636363CC] font-normal">(4h)</span>
                  </span>
                </div>
                <div className="border border-[#FDA33A] flex w-[95%] h-full mb-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FDA33A] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D]  rounded-r-[5px] w-full font-semibold pl-2">
                    2.00p - 5.00p{" "}
                    <span className="text-[#636363CC] font-normal">(4h)</span>
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#FDA33A] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FDA33A] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D]  rounded-r-[5px] w-full font-semibold pl-2">
                    2.00p - 10.00p{" "}
                    <span className="text-[#636363CC] font-normal">(8h)</span>
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#FDA33A] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FDA33A] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D]  rounded-r-[5px] w-full font-semibold pl-2">
                    2.00p - 10.00p{" "}
                    <span className="text-[#636363CC] font-normal">(8h)</span>
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#FDA33A] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FDA33A] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D]  rounded-r-[5px] w-full font-semibold pl-2">
                    2.00p - 10.00p{" "}
                    <span className="text-[#636363CC] font-normal">(8h)</span>
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#FDA33A] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FDA33A] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D] bg-[#FFF7ED] w-full rounded-r-[5px] font-semibold pl-2">
                    2.00p - 10.00p{" "}
                    <span className="text-[#636363CC] font-normal">(8h)</span>
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#FFD702] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FFD702] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D] w-full bg-[#FFFDF0] font-semibold rounded-r-[5px] pl-2">
                    9.00a - 1.00p{" "}
                    <span className="text-[#636363CC] font-normal">(4h)</span>
                  </span>
                </div>
                <div className="border border-[#FDA33A] flex w-[95%] h-full mb-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FDA33A] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D]  rounded-r-[5px] w-full font-semibold pl-2">
                    2.00p - 5.00p{" "}
                    <span className="text-[#636363CC] font-normal">(4h)</span>
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
            </div>
            <div className="flex flex-col">
              <div className="flex border w-44 h-14">
                <div className="flex  items-center m-auto gap-2">
                  <span className="w-[35px] rounded-full px-2 py-1.5 h-[35px] text-white bg-black">
                    CG
                  </span>
                  <div className="">
                    <span className="">
                      Steven Smith{" "}
                      <span className="flex gap-2">
                        <span className="text-[#253858] gap-0.5  flex items-center font-semibold">
                          {" "}
                          <Icon
                            icon="ri:time-line"
                            color="#ccc"
                            className="mt-0.5"
                          />
                          24:00
                        </span>{" "}
                        <span className="text-[#5C5C5C] gap-0.5 flex items-center">
                          <Icon icon="eva:calendar-outline" color="#ccc" />3
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#122F50CC] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#122F50CC] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D] bg-[#ECF5FF] w-full font-semibold rounded-r-[5px] pl-2">
                    7.00p - 3.00a{" "}
                    <span className="text-[#636363CC] font-normal">(8h)</span>
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#FFD702] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FFD702] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D] w-full bg-[#FFFDF0] font-semibold rounded-r-[5px] pl-2">
                    9.00a - 5.00p{" "}
                    <span className="text-[#636363CC] font-normal">(8h)</span>
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#FFD702] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FFD702] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D] w-full bg-[#FFFDF0] font-semibold rounded-r-[5px] pl-2">
                    9.00a - 5.00p{" "}
                    <span className="text-[#636363CC] font-normal">(8h)</span>
                  </span>
                </div>
                <div className="border border-[#FDA33A] flex w-[95%] h-full mb-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FDA33A] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D]  rounded-r-[5px] w-full font-semibold pl-2">
                    2.00p - 10.00p{" "}
                    <span className="text-[#636363CC] font-normal">(8h)</span>
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#FFD702] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FFD702] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D] bg-[#FFFDF0] rounded-r-[5px] w-full font-semibold pl-2">
                    9.00a - 5.00p{" "}
                    <span className="text-[#636363CC] font-normal">(8h)</span>
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>

              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
            </div>
            <div className="flex flex-col">
              <div className="flex border w-44 h-14">
                <div className="flex  items-center m-auto gap-2">
                  <span className="w-[35px] rounded-full px-2 py-1.5 h-[35px] text-white bg-black">
                    CG
                  </span>
                  <div className="">
                    <span className="">
                      Steven Smith{" "}
                      <span className="flex gap-2">
                        <span className="text-[#253858] gap-0.5  flex items-center font-semibold">
                          {" "}
                          <Icon
                            icon="ri:time-line"
                            color="#ccc"
                            className="mt-0.5"
                          />
                          24:00
                        </span>{" "}
                        <span className="text-[#5C5C5C] gap-0.5 flex items-center">
                          <Icon icon="eva:calendar-outline" color="#ccc" />3
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#FFD702] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FFD702] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D] w-full bg-[#FFFDF0] font-semibold rounded-r-[5px] pl-2">
                    9.00a - 1.00p{" "}
                    <span className="text-[#636363CC] font-normal">(4h)</span>
                  </span>
                </div>
                <div className="border border-[#FDA33A] flex w-[95%] h-full mb-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FDA33A] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D]  rounded-r-[5px] w-full font-semibold pl-2">
                    5.00p - 10.00p{" "}
                    <span className="text-[#636363CC] font-normal">(5h)</span>
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#FFD702] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FFD702] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D] w-full bg-[#FFFDF0] font-semibold rounded-r-[5px] pl-2">
                    9.00a - 1.00p{" "}
                    <span className="text-[#636363CC] font-normal">(4h)</span>
                  </span>
                </div>
                <div className="border border-[#FDA33A] flex w-[95%] h-full mb-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FDA33A] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D]  rounded-r-[5px] w-full font-semibold pl-2">
                    5.00p - 10.00p{" "}
                    <span className="text-[#636363CC] font-normal">(5h)</span>
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>

              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
            </div>

            <div className="flex flex-col">
              <div className="flex border w-44 h-14">
                <div className="flex  items-center m-auto gap-2">
                  <span className="w-[35px] rounded-full px-2 py-1.5 h-[35px] text-white bg-black">
                    CG
                  </span>
                  <div className="">
                    <span className="">
                      Steven Smith{" "}
                      <span className="flex gap-2">
                        <span className="text-[#253858] gap-0.5  flex items-center font-semibold">
                          {" "}
                          <Icon
                            icon="ri:time-line"
                            color="#ccc"
                            className="mt-0.5"
                          />
                          24:00
                        </span>{" "}
                        <span className="text-[#5C5C5C] gap-0.5 flex items-center">
                          <Icon icon="eva:calendar-outline" color="#ccc" />3
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                  <div className="border border-[#FDA33A] flex w-[95%] h-full m-1 rounded-[5px]">
                    <span className="w-[5px] bg-[#FDA33A] rounded-l-[5px] h-full"></span>
                    <span className="text-[#3D3D3D] w-full bg-[#FFF7ED]  rounded-r-[5px] w-full font-semibold pl-2">2.00p - 10.00p <span className="text-[#636363CC] font-normal">(8h)</span></span>
                  </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                  <div className="border border-[#FDA33A] flex w-[95%] h-full m-1 rounded-[5px]">
                    <span className="w-[5px] bg-[#FDA33A] rounded-l-[5px] h-full"></span>
                    <span className="text-[#3D3D3D] w-full bg-[#FFF7ED]  rounded-r-[5px] w-full font-semibold pl-2">2.00p - 10.00p <span className="text-[#636363CC] font-normal">(8h)</span></span>
                  </div>
              </div>  
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#FDA33A] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FDA33A] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D] w-full bg-[#FFF7ED] rounded-r-[5px] w-full font-semibold pl-2">2.30a - 9.30p <span className="text-[#636363CC] font-normal">(7h30m)</span></span>
                </div>
              </div>
                               
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
            </div>
            <div className="flex flex-col">
              <div className="flex border w-44 h-14">
                <div className="flex  items-center m-auto gap-2">
                  <span className="w-[35px] rounded-full px-2 py-1.5 h-[35px] text-white bg-black">
                    CG
                  </span>
                  <div className="">
                    <span className="">
                      Steven Smith{" "}
                      <span className="flex gap-2">
                        <span className="text-[#253858] gap-0.5  flex items-center font-semibold">
                          {" "}
                          <Icon
                            icon="ri:time-line"
                            color="#ccc"
                            className="mt-0.5"
                          />
                          24:00
                        </span>{" "}
                        <span className="text-[#5C5C5C] gap-0.5 flex items-center">
                          <Icon icon="eva:calendar-outline" color="#ccc" />3
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#FFD702] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FFD702] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D] w-full bg-[#FFFDF0] font-semibold rounded-r-[5px] pl-2">
                    9.00a - 1.00p{" "}
                    <span className="text-[#636363CC] font-normal">(4h)</span>
                  </span>
                </div>
                <div className="border border-[#FDA33A] flex w-[95%] h-full mb-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FDA33A] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D]  rounded-r-[5px] w-full font-semibold pl-2">
                    5.00p - 10.00p{" "}
                    <span className="text-[#636363CC] font-normal">(5h)</span>
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center ">
                <div className="border border-[#FFD702] flex w-[95%] h-full m-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FFD702] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D] w-full bg-[#FFFDF0] font-semibold rounded-r-[5px] pl-2">
                    9.00a - 1.00p{" "}
                    <span className="text-[#636363CC] font-normal">(4h)</span>
                  </span>
                </div>
                <div className="border border-[#FDA33A] flex w-[95%] h-full mb-1 rounded-[5px]">
                  <span className="w-[5px] bg-[#FDA33A] rounded-l-[5px] h-full"></span>
                  <span className="text-[#3D3D3D]  rounded-r-[5px] w-full font-semibold pl-2">
                    5.00p - 10.00p{" "}
                    <span className="text-[#636363CC] font-normal">(5h)</span>
                  </span>
                </div>
              </div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>

              <div className="border w-44 h-14 flex flex-col justify-center items-center "></div>
            </div>
            </div>
            </div>
          </div>
    </IonPage>
  );
}

export default Home
