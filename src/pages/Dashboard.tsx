/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layout } from "../components";
import { AnalyticsCard, ArrowdownIcon, BarCharts, DocdownloadIcon, ProgressCard } from "../subcomponents";
import {
  tableHeadings,
  tableData,
  progressData,
  analyticsInfo,
} from "../assets/utils";
import { Table } from "@mantine/core";

const Dashboard = () => {
  
  // table headers
  const headers = tableHeadings.map((heading: any, i: number) => (
    <Table.Th
      className="text-left font-[500] md:text-[16px] text-[14px] text-[#9CA4AB] px-0 border-b-[1px] py-[16px]"
      key={i}
    >
      {heading.column}
    </Table.Th>
  ));

  // table rows
  const rows = tableData.map((data: any, i: number) => (
    <Table.Tr key={i}>
      <Table.Td>
        <div className="py-[16px] flex items-center gap-[10px]">
          <img src={data.img} alt="img 5" />
          <span className="md:text-[16px] text-[13px] text-[#3A3F51] font-[500]">
            {data.name}
          </span>
        </div>
      </Table.Td>
      <Table.Td>
        <span className="md:text-[16px] text-[13px] text-[#3A3F51]">
          {data.date}
        </span>
      </Table.Td>
      <Table.Td>
        <span className="md:text-[16px] text-[13px] text-[#0D062D] font-[500]">
          {data.amount}
        </span>
      </Table.Td>
      <Table.Td>
        <span
          className={`md:text-[16px] text-[13px] font-[400]  ${
            data.status == "Paid" ? "text-[#34CAA5]" : "text-[#ED544E]"
          }`}
        >
          {data.status}
        </span>
      </Table.Td>
      <Table.Td>
        <div className="flex items-center gap-[6px]">
          <DocdownloadIcon />
          <span className="md:text-[14px] text-[12px] text-[#3A3F51] font-[400]">View</span>
        </div>
      </Table.Td>
    </Table.Tr>
  ));

  // platform details
  const platformDetails = progressData.map((pData: any, i: number) => (
    <ProgressCard
      key={i}
      pName={pData.pName}
      progressValue={pData.progressValue}
      dollarAmt={pData.dollarAmt}
      percent={pData.percent}
      hex={pData.hex}
    />
  ));

  // analytics card
  const analytics= analyticsInfo.map((info: any, i: number) => (
    <AnalyticsCard
      key={i}
      areaGraph={info.areaGraph}
      h={info.h}
      num={info.num}
      percent={info.percent}
      icon={info.icon}
      isEven={i==1 || i==2}
      isFirst={i == 0}
    />
  ));

  return (
    <Layout>
      <section className="grid lg:grid-cols-12 grid-cols-1 gap-4">
        <div className="lg:col-span-7 bg-white rounded-[14px] p-[20px]">
          {/* heading text */}
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] leading-[28px] lg:text-[18px] lg:leading-[28px]">
              Sales Trends
            </h3>
            <div className="flex items-center gap-[10px]">
              <h4 className="text-[12px] leading-[22px] lg:text-[14px] lg:leading-[22px]">
                Short by :{" "}
              </h4>
              <div className="px-[12px] py-[6px] border-[1px] border-[#DADDDD] flex justify-center items-center gap-[10px] rounded-[20px]">
                <h3 className="text-[12px] md:text-[14px]">
                  Weekly
                </h3>
                <ArrowdownIcon />
              </div>
            </div>
          </div>
          <BarCharts />
        </div>
        <div className="lg:col-span-5 rounded-[14px] grid sm:grid-cols-2 gap-4">
          {analytics}
        </div>
        <div className="lg:col-span-7 bg-white rounded-[14px] p-[20px]">
          {/* heading text */}
          <div className="flex items-center justify-between">
            <h3 className="text-[14px] leading-[28px] md:text-[18px] lg:leading-[28px]">
              Last Orders
            </h3>
            <div className="flex items-center gap-[10px]">
              <h4 className="text-[14px] leading-[22px] text-[#34CAA5] cursor-pointer md:text-[18px] lg:leading-[22px]">
                See All
              </h4>
            </div>
          </div>
          {/* table */}
          <div className="mt-1 overflow-x-auto">
            <Table.ScrollContainer minWidth={"600"}>
              <Table>
                <Table.Thead>{headers}</Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
              </Table>
            </Table.ScrollContainer>
          </div>
        </div>
        <div className="lg:col-span-5 bg-white rounded-[14px] p-[20px]">
          {/* heading text */}
          <div className="flex items-center justify-between mb-[20px]">
            <h3 className="text-[14px] leading-[26px] md:text-[18px] lg:leading-[26px]">
              Top Platform
            </h3>
            <div className="flex items-center gap-[10px]">
              <h4 className="text-[14px] leading-[22px] text-[#34CAA5] cursor-pointer md:text-[18px] lg:leading-[22px]">
                See All
              </h4>
            </div>
          </div>
          {/* progress bar section */}
          <section className="flex flex-col items-center gap-[20px]">
            {platformDetails}
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
