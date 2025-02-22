import {useRef} from "react";
const Form = ({gencart}) => {

  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const handleSubmit =(e)=>{
    e.preventDefault();  //By calling e.preventDefault(), you stop this refresh, allowing React to handle the form data dynamically.
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    gencart(name,age)
  }

  return (
    <div className="form-container">
      <h2>Enter Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            required
            ref={nameRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            required
            ref={ageRef}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;