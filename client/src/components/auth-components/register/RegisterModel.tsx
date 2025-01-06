// // src/components/SignUpCard.tsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { signup } from "@/services/auth";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const SignUpCard: React.FC = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }
//     try {
//       await signup({
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//       });
//       navigate("/account-info");
//     } catch (err) {
//       setError("Error creating account. Please try again.");
//     }
//   };

//   return (
//     <div className="w-full max-w-md p-8 space-y-6 bg-white border border-gray-200 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
//       {error && <p className="text-red-500 text-center">{error}</p>}
//       <form className="space-y-4" onSubmit={handleSubmit}>
//         <Input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <Input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <Input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <Input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           required
//         />
//         <Button
//           type="submit"
//           className="w-full bg-brandBg text-white rounded-lg py-2"
//         >
//           Create Account
//         </Button>
//       </form>
//       <p className="text-sm text-center text-gray-600">
//         Already have an account?{" "}
//         <a href="/login" className="text-blue-500 hover:underline">
//           Log in
//         </a>
//       </p>
//     </div>
//   );
// };

// export default SignUpCard;
