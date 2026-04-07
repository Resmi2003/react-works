import React from "react";
import { useFormik } from "formik";

function App() {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: ""
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values));
    }
  });

  return (
    <div>
      <h2>Formik Form</h2>

      <form onSubmit={formik.handleSubmit}>

        <label>Name:</label><br/>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br/><br/>

        <label>Email:</label><br/>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br/><br/>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;