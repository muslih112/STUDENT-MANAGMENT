"use client";
const Table = ({
  studentname,
  setStudentName,
  classname,
  setClassName,
  age,
  setAge,
  isEditing,
  setIsEditing,
  records = [],
  setRecords,
  activeuser,
  setActiveUser,
  setView,
}) => {
  const EditStudent = (record) => {
    setIsEditing(true);
    setStudentName(record.studentname);
    setClassName(record.classname);
    setAge(record.age);
    let activeuser = record;

    console.log({ activeuser });
    setActiveUser(record);
    setView(true);
  };
  const DeleteStudent = (id) => {
    setRecords((records) => {
      const Deletebtn = records.filter((record) => {
        return record.id !== id;
      });
      return Deletebtn;
    });
  };

  return (
    <section className="table flex justify-center items-center w-full px-10 pt-4 mb-2 h-full">
      <div className=" h-full w-full  bg-white border border-t-0 ">
        <div className="flex justify-start border items-center border-r-0 border-l-0 mb-2 bg-blue-100 h-8 w-full">
          <div className="min-w-8 flex flex-nowrap justify-center border border-l-0 border-b-0 border-t-0 items-center h-full">
            ID
          </div>
          <div className="min-w-4/12 flex flex-nowrap justify-start border border-l-0 border-b-0 border-t-0 pl-4 items-center h-full">
            Name
          </div>
          <div className="min-w-40 flex flex-nowrap justify-start pl-4 border border-l-0 border-b-0 border-t-0 items-center h-full">
            Class
          </div>
          <div className="min-w-20 flex flex-nowrap justify-center border border-l-0 border-b-0 border-t-0 items-center h-full">
            Age
          </div>
          <div className="min-w-4/12 max-w-max flex flex-nowrap justify-center items-center h-full">
            Action
          </div>
        </div>
        <section>
          <ol className="block justify-start grid-cols-5 items-center min-h-20 mb-2 h-full">
            {records.map((record) => (
              <li
                className="flex w-full mb-4 bg-gray-100"
                key={`record-${record.id}`}
              >
                <div className="min-w-8  flex flex-nowrap justify-center items-center h-full">
                  {record.id}
                </div>
                <div className="min-w-4/12  flex flex-nowrap justify-start pl-4 items-center h-full">
                  {record.studentname}
                </div>
                <div className="min-w-40  flex flex-nowrap justify-start pl-4 items-center h-full">
                  {record.classname}
                </div>
                <div className="min-w-20  flex flex-nowrap justify-center items-center h-full">
                  {record.age}
                </div>
                <div className="min-w-4/12  flex flex-nowrap justify-center items-center h-full">
                  <button
                    className="bg-green-500 text-white px-3 py-1 mr-3 rounded-xl cursor-pointer"
                    onClick={() => EditStudent(record)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-xl cursor-pointer"
                    onClick={() => DeleteStudent(record.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </section>
  );
};
export default Table;
