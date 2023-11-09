import { ISignUpForm } from "@/app/models/ISignUp";
import toast from "react-hot-toast";

/**
 * Function to register users
 * @param data The user data
 * @returns .....
 */
export async function registerUsers(data: ISignUpForm) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/registeration/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          location: data.location,
          phonenumber: data.phoneNumber,
          password: data.password,
        }),
      }
    );

    /**
     * Show a failed toast message if unsuccessfull
     */
    if (!response.ok) {
      toast.error("Failed");
    }

    /**
     * Show a success toast message if successfull
     */
    if (response.ok) {
      toast.success("Success");
    }

    const serverResponse = await response.json();
  } catch (error) {
    console.log(error);
  }
}
