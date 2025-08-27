"use client";
import { useState } from "react";
import AddSubmit from "./add-student";
import Table from "./table";
import Image from "next/image";

const PushToFirstItem = ["push_to_first_item_on_record_list"];

const TableBody = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [records, setRecords] = useState([]);
  const [activeuser, setActiveUser] = useState(null);
  const [view, setView] = useState(false);
  const [studentname, setStudentName] = useState("");
  const [classname, setClassName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="table_head shadow-2xl h-full m-10 w-full">
      <div className="top items-center justify-start w-full flex px-7 h-20">
        <p className="list-name text-2xl">STUDENT LIST</p>
      </div>

      <div className="search_add_holder items-center justify-between h-full w-full flex px-2">
        <div className="search_add items-center justify-between h-full w-full flex p-5">
          <input
            placeholder="Search"
            className="search-input bg-white h-12 border w-80 rounded-xl text-lg pl-5 pr-10 absolute"
          />
          <Image
            className="relative ml-70 cursor-pointer"
            width={20}
            height={20}
            src="/search.svg"
            alt="search"
          />
          <button
            onClick={() => {
              setView((prev) => !prev);
              setIsEditing(false);
              setStudentName("");
              setClassName("");
              setAge("");
            }}
            className="add-button rounded-xl text-center border-none bg-green-400 cursor-pointer text-lg h-10 w-25"
          >
            {view ? "Go Back" : "+Add"}
          </button>
        </div>
      </div>

      {view ? (
        <AddSubmit
          records={records}
          setRecords={setRecords}
          classname={classname}
          setClassName={setClassName}
          studentname={studentname}
          setStudentName={setStudentName}
          PushToFirstItem={PushToFirstItem}
          age={age}
          setAge={setAge}
          isEditing={isEditing}
          activeuser={activeuser}
          setIsEditing={setIsEditing}
          view={view}
          setView={setView}
        />
      ) : (
        <Table
          age={age}
          setAge={setAge}
          isEditing={isEditing}
          activeuser={activeuser}
          setIsEditing={setIsEditing}
          records={records}
          setRecords={setRecords}
          classname={classname}
          setClassName={setClassName}
          studentname={studentname}
          setStudentName={setStudentName}
          setActiveUser={setActiveUser}
          setView={setView}
        />
      )}
    </div>
  );
};

export default TableBody;
