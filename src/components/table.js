"use client";
import { useEffect } from "react";

const Table = ({
  setFormData,
  formData,
  setIsEditing,
  records = [],
  setRecords,
  setActiveUser,
  setView,
}) => {
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("/api/students", { method: "GET" });
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Failed to fetch students");

        const numbered = data.map((student, index) => ({
          ...student,
          number: index + 1,
        }));

        setRecords(numbered);
      } catch (err) {
        console.error("Error fetching students:", err);
      }
    };

    fetchStudents();
  }, [setRecords]);

  const EditStudent = (record) => {
    setIsEditing(true);
    setFormData(record);
    setActiveUser(record);
    setView(true);
    console.log("Editing:", record);
  };

  const DeleteStudent = async (id) => {
    if (!id) return console.error("No ID provided to DeleteStudent!");

    try {
      const response = await fetch(`/api/students/${id}`, { method: "DELETE" });
      const result = await response.json();

      if (!response.ok)
        throw new Error(result.error || "Failed to delete student");

      setRecords((prev) => {
        const updated = prev.filter((record) => record._id !== id);
        return updated.map((student, index) => ({
          ...student,
          number: index + 1,
        }));
      });

      console.log("Student deleted successfully:", id);
    } catch (error) {
      console.error("Error deleting student:", error.message);
    }
  };

  return (
    <section className="table flex justify-center items-center w-full px-10 pt-4 mb-2 h-full">
      <div className="h-full w-full bg-white border border-t-0">
        <div className="flex justify-start border items-center border-r-0 border-l-0 mb-2 bg-blue-100 h-8 w-full">
          <div className="min-w-8 flex justify-center items-center h-full border border-l-0 border-b-0 border-t-0">
            ID
          </div>
          <div className="min-w-4/12 flex justify-start pl-4 items-center h-full border border-l-0 border-b-0 border-t-0">
            Name
          </div>
          <div className="min-w-40 flex justify-start pl-4 items-center h-full border border-l-0 border-b-0 border-t-0">
            Class
          </div>
          <div className="min-w-20 flex justify-center items-center h-full border border-l-0 border-b-0 border-t-0">
            Age
          </div>
          <div className="min-w-4/12 flex justify-center items-center h-full">
            Action
          </div>
        </div>

        <section>
          <ol className="block min-h-20 mb-2 h-full">
            {records.length === 0 ? (
              <p className="text-center text-gray-500 py-5">
                No students found.
              </p>
            ) : (
              records.map((record) => (
                <li
                  className="flex w-full mb-4 bg-gray-100"
                  key={`record-${record._id}`}
                >
                  <div className="min-w-8 flex justify-center items-center h-full">
                    {record.number}
                  </div>
                  <div className="min-w-4/12 flex justify-start pl-4 items-center h-full">
                    {record.name}
                  </div>
                  <div className="min-w-40 flex justify-start pl-4 items-center h-full">
                    {record.class}
                  </div>
                  <div className="min-w-20 flex justify-center items-center h-full">
                    {record.age}
                  </div>
                  <div className="min-w-4/12 flex justify-center items-center h-full">
                    <button
                      className="bg-green-500 text-white px-3 py-1 mr-3 rounded-xl cursor-pointer"
                      onClick={() => EditStudent(record)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-xl cursor-pointer"
                      onClick={() => DeleteStudent(record._id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            )}
          </ol>
        </section>
      </div>
    </section>
  );
};

export default Table;
