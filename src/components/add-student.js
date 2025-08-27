"use client";

const AddSubmit = ({
  PushToFirstItem,
  studentname,
  setStudentName,
  classname,
  setClassName,
  age,
  setAge,
  isEditing,
  setIsEditing,
  records,
  setRecords,
  activeuser,
  view,
  setView,
}) => {
  const reassignAndSort = (list) => {
    return list
      .map((item, index) => ({ ...item, id: index + 1 }))
      .sort((a, b) => a.id - b.id);
  };

  const SubmitStudent = () => {
    const newList = [{ studentname, classname, age }, ...records];
    setRecords(reassignAndSort(newList));
    setStudentName("");
    setClassName("");
    setAge("");
    setView(false);
    setIsEditing(false);
  };

  const updateUser = (operationType) => {
    const filteredList = records.filter((item) => item.id !== activeuser.id);
    if (operationType === PushToFirstItem[0]) {
      const updatedList = [{ studentname, classname, age }, ...filteredList];
      setRecords(reassignAndSort(updatedList));
    }
    setStudentName("");
    setClassName("");
    setAge("");
    setIsEditing(false);
    setView(false);
  };

  const studentData = {
    studentname,
    classname,
    age,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });

      const result = await res.json();
      console.log("Server response:", result);

      isEditing ? updateUser(PushToFirstItem[0]) : SubmitStudent();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="p-10 w-90 bg-blue-100">
          <input
            placeholder="Name"
            required
            value={studentname}
            onChange={(e) => setStudentName(e.target.value)}
            className="border bg-white h-10 w-full mb-5 px-3"
          />
          <input
            placeholder="Class"
            required
            value={classname}
            onChange={(e) => setClassName(e.target.value)}
            className="border bg-white h-10 w-full mb-5 px-3"
          />
          <input
            placeholder="Age"
            type="number"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border bg-white h-10 w-full mb-5 px-3"
          />
          <button type="submit" className="w-full h-10 bg-green-400">
            {isEditing ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddSubmit;
