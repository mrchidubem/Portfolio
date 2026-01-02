// src/components/RegisterTest.jsx
import { useEffect } from "react";
import  api  from "../api/http"; 

export default function RegisterPage() {
  useEffect(() => {
    const registerPage = async () => {
      try {
        const response = await api.post("/api/v1/users/register", {
          name: "dubic",
          email: "mrchidubem@gmail.com",
          password: "Cc2013187302"
        });
        console.log("Registered user frontend:", response.data);
      } catch (error) {
        console.error("Registration error:", error);
      }
    };

    registerPage();
  }, []);

  return <div>Check the console for registration result</div>;
}
