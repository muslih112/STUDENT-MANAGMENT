"use client";

const AddSubmit = ({
  PushToFirstItem,
  setFormData,
  formData,
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
      .map((item, index) => ({ ...item, number: index + 1 }))
      .sort((a, b) => a.number - b.number);
  };

  const SubmitStudent = async () => {
    const data = { ...formData, age: Number(formData.age) };

    try {
      const res = await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to add student");

      const newList = [result, ...records];
      setRecords(reassignAndSort(newList));
      console.log("Student added:", result);
    } catch (err) {
      console.error("Error adding student:", err);
    } finally {
      resetForm();
    }
  };

  const UpdateStudent = async () => {
    if (!activeuser || !activeuser._id) {
      console.error("No valid active user ID for update");
      return;
    }

    const data = { ...formData, age: Number(formData.age) };

    try {
      const res = await fetch(`/api/students/${activeuser._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to update student");

      const updatedList = records.map((student) =>
        student._id === activeuser._id ? result : student
      );
      setRecords(reassignAndSort(updatedList));

      console.log("Student updated:", result);
    } catch (err) {
      console.error("Error updating student:", err);
    } finally {
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({ name: "", class: "", age: "" });
    setIsEditing(false);
    setView(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await UpdateStudent();
    } else {
      await SubmitStudent();
    }
  };

  return (
    <section className="flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="p-10 w-90 bg-blue-100">
          <input
            placeholder="Name"
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border bg-white h-10 w-full mb-5 px-3"
          />
          <input
            placeholder="Class"
            required
            type="text"
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="border bg-white h-10 w-full mb-5 px-3"
          />
          <input
            placeholder="Age"
            required
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="border bg-white h-10 w-full mb-5 px-3"
          />
          <button type="submit" className="w-full h-10 bg-green-400">
            {isEditing ? "Update Student" : "Add Student"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddSubmit;
