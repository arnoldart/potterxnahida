'use client'

import { checkAuth } from "@/utils/checkAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type UserData = {
  users: {
    id: number,
    username: string,
    email: string,
    role: string
  }[]
}

const DashboardPage = () => {
  const router = useRouter()
  const [userData, setUserData] = useState<UserData | []>([])

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/get_users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers or authentication tokens if needed
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        console.error('Error fetching user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const deleteUser = async (userId:number) => {
    try {
      await fetch(`http://127.0.0.1:5000/delete_user/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      fetchData();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    // Check if the user is authenticated
    if (!checkAuth()) {
      // If not authenticated, redirect to the login page
      router.push('/login');
    } else {
      // If authenticated, fetch user data
      fetchData();
    }
  }, []);

  return (
    <div className="py-3 px-5">
      <div className="flex justify-between">
        <h1>Dashboard</h1>
        <form action="">
          <input type="text" className="text-black outline-none border-2 border-black" placeholder="Search..." />
        </form>
      </div>
      {/* <div className="container mx-auto"> */}
        <table className="w-full border border-black mt-3">
          <thead className="border border-black">
            <tr>
              <th className="border border-black p-2">Username</th>
              <th className="border border-black p-2">Email</th>
              <th className="border border-black p-2">Role</th>
              <th className="border border-black p-2">Action</th>
            </tr>
          </thead>
          <tbody>
          {userData ? (
            userData?.map((user:any) => (
              <tr key={user.id}>
                <td className="border border-black p-2">{user.username}</td>
                <td className="border border-black p-2">{user.email}</td>
                <td className="border border-black p-2">{user.role}</td>
                <td className="border border-black p-2">
                  <div className="justify-center flex">
                    <div onClick={() => deleteUser(user.id)} className="bg-red-500 text-white rounded cursor-pointer text-center inline-block px-3 py-1">
                      <p>Delete</p>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border border-black p-2">
                No user data available.
              </td>
            </tr>
          )}
        </tbody>
        </table>
      {/* </div> */}
    </div>
  )
}

export default DashboardPage