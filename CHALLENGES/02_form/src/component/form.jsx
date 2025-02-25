// here is a optimise way of creating  form 
 

// Approach                  	When to Use?	                        Pros                               	Cons
// ✅ Formik + Yup      Best for complex forms	               Easy validation, less boilerplate	   Slightly more setup
// 🟡 useState      	Small forms, manual validation	        Simple state management	                Needs manual validation
// 🔴 useRef	        Avoid re-renders	                    Direct DOM access	                    Hard to validate
// 👉 Use Formik + Yup for optimized, scalable form handling. 🚀



import './contact.css';
import { useState } from 'react';

const Form = () => {
    const [user, setUser] = useState({
        // handle multiple data in form using object 
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    });

    // Handle input changes dynamically
    const handleInputChange = (e) => {
        setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,  // in this [ ]  is dynamically rewite value in the state obj.
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        console.log("User Data:", user);
        alert("Form submitted successfully!");
// we not need this function because our data hold in "user" state
// so i can directely console "user"
  console.log(user);

//             const formData={
//                 firstName:firstName,
//                 lastName,   // is name is same we can direct  write this
//                 email,
//                 password,
//                 phoneNumber,
//             };
// console.log(formData);

    };

    return (
        <div className="container">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}> 
                <label>First Name:</label>
                <input 
                    type="text" 
                    name="firstName" 
                    value={user.firstName}
                    onChange={handleInputChange}  
                    required 
                />

                <label>Last Name:</label>
                <input 
                    type="text" 
                    name="lastName" 
                    value={user.lastName}
                    onChange={handleInputChange} 
                    required 
                />

                <label>Email:</label>
                <input 
                    type="email" 
                    name="email"
                    value={user.email} 
                    onChange={handleInputChange} 
                    required 
                />

                <label>Password:</label>
                <input
                    type="password" 
                    name="password" 
                    value={user.password}
                    onChange={handleInputChange} 
                    required 
                />

                <label>Phone No:</label>
                <input 
                    type="tel" 
                    name="phoneNumber" 
                    pattern="[0-9]{10}" 
                    title="Enter a 10-digit phone number" 
                    value={user.phoneNumber}
                    onChange={handleInputChange} 
                    required 
                />

                <button type="submit">Register</button>
            </form>

            <section className="summary" style={{ textAlign: "center", marginTop: "30px" }}>
                <p>
                    Hello, my name is <span>{user.firstName?user.firstName:"[please enter your name]"} {user.lastName}</span>.
                    My email address is <span>{user.email}</span> and my phone number is <span>{user.phoneNumber}</span>.
                </p>
            </section>
        </div>
    );
};

export default Form;









// import '../index.css';
// import { useRef, useState } from 'react';

// const Form = () => {
//     const nameref = useRef(null);
//     const [name, setName] = useState("");

//     const handleInputChange = () => {
//         setName(nameref.current?.value || ""); // Update state when input changes
//     };

//     return (
//         <div className="container">
//             <h2>Registration Form {name}</h2>
//             <form action="submit.php" method="POST">
//                 <label>First Name:</label>
//                 <input 
//                     type="text" 
//                     id="fname" 
//                     name="fname" 
//                     required 
//                     ref={nameref} 
//                     onChange={handleInputChange} // Update state when user types
//                 />

//                 <label>Last Name:</label>
//                 <input type="text" id="lname" name="lname" required />

//                 <label>Email:</label>
//                 <input type="email" id="email" name="email" required />

//                 <label>Password:</label>
//                 <input type="password" id="password" name="password" required />

//                 <label>Phone No:</label>
//                 <input 
//                     type="tel" 
//                     id="phone" 
//                     name="phone" 
//                     required 
//                     pattern="[0-9]{10}" 
//                     title="Enter a 10-digit phone number" 
//                 />

//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default Form;

// // Counter Component (Correct as it is)
// export const Counter = () => {
//     const countRef = useRef(0); // Stores count without causing re-renders
//     const [stateCount, setStateCount] = useState(0); // React state

//     const incrementRef = () => {
//         countRef.current += 1;
//         console.log("Ref Count:", countRef.current); // Updates without re-rendering
//     };

//     const incrementState = () => {
//         setStateCount(stateCount + 1); // Causes a re-render
//     };

//     return (
//         <div>
//             <p>State Count: {stateCount}</p>
//             <p>Ref Count: {countRef.current} (Wont re-render UI)</p>
//             <button onClick={incrementState}>Increment State</button>
//             <button onClick={incrementRef}>Increment Ref</button>
//         </div>
//     );
// };







