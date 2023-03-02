import { useFormik } from "formik";
import React from "react";
import { useSearchParams } from "react-router-dom";

function UserInput() {
  let [searchParams, setSearchParams] = useSearchParams();
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setSearchParams(values);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className={"col-span-full flex justify-center items-center gap-4"}
    >
      <input
        className="w-96 text-lg border-0 outline-offset-4 rounded-md px-1 py-2 focus:"
        type="text"
        id="search"
        name="search"
        placeholder="عنوان مورد نظر را وارد کنید"
        value={formik.values.search}
        onChange={formik.handleChange}
      />
      <button
        type="submit"
        className="text-[#f8d351] border-[#0e1b22] bg-[#142c38] outline-0 active:scale-95 focus:outline-0 transition-all duration-200"
      >
        جستجو
      </button>
    </form>
  );
}

export default UserInput;
