"use client";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import TableBody from "@/components/table-body";

const Dashboard = () => {
  return (
    <section className="all bg-blue-100 p-4 w-full h-full">
      <Header />
      <div className="container h-full w-full min-w-full justify-start text-start flex">
        <Sidebar />
        <TableBody />
      </div>
    </section>
  );
};
export default Dashboard;
// mongodb password
// Fgw9NOxENp1mIGRe
