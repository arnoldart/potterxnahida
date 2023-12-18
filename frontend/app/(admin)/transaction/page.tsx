'use client'

import { checkAuth } from "@/utils/checkAuth";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

type UserData = {
  users: {
    id: number,
    username: string,
    email: string,
    role: string
  }[]
}

const TransactionPage = () => {
  const router = useRouter()
  const [userData, setUserData] = useState<UserData | []>([])
  const [username, setUsername] = useState('')

  const fetchData = async (searchUsername: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/get_transactions_all_users?username=${searchUsername || ''}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
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

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    fetchData(username);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    // Check if the user is authenticated
    if (!checkAuth()) {
      // If not authenticated, redirect to the login page
      router.push('/login');
    }
    fetchData(username);
  }, [username]);

  return (
    <div className="py-3 px-5">
      <div className="flex justify-between">
        <h1 className="font-bold">Transaction</h1>
        <form onSubmit={handleSearch}>
          <input onChange={handleInputChange} value={username} type="text" className="text-black outline-none border-2 border-black" placeholder="Search..." />
        </form>
      </div>
      {/* <div className="container mx-auto"> */}
        <table className="w-full border border-black mt-3">
          <thead className="border border-black">
            <tr>
              <th className="border border-black p-2">Username</th>
              <th className="border border-black p-2">Email</th>
              <th className="border border-black p-2">Status</th>
              <th className="border border-black p-2">Pembelajaran</th>
            </tr>
          </thead>
          <tbody>
            {userData ? (
              userData?.data?.map((user: any) => (
                <tr key={user.id}>
                  <td className="border border-black p-2">{user.username}</td>
                  <td className="border border-black p-2">{user.email}</td>
                  <td className="border border-black p-2">
                    <div className=" text-white text-center flex justify-center ">
                      <div className="bg-green-500 rounded px-3 py-1 inline-block">
                        <p>Sudah membayar</p>
                      </div>
                    </div>
                  </td>
                  <td className="border border-black p-2">
                    <div className=" text-white text-center flex justify-center ">
                     {user.transaction_type == "Blue" ? (
                      <div className="bg-blue-500 rounded px-3 py-1 inline-block">
                        <p>Blue</p>
                      </div>
                     ) : (
                      <div className="bg-red-500 rounded px-3 py-1 inline-block">
                        <p>Red</p>
                      </div>
                     )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="border border-black p-2">No user data available.</td>
              </tr>
            )}
          </tbody>

          {/* <tbody>
          {userData ? (
            userData?.map((user:any) => (
              <tr key={user.id}>
                <td className="border border-black p-2">{user.username}</td>
                <td className="border border-black p-2">{user.email}</td>
                <td className="border border-black p-2">
                  <div className="justify-center flex">
                    <div className={`${user.transactions.length === 0 ? "bg-red-500" : "bg-green-500"} text-white rounded text-center inline-block px-3 py-1`}>
                      <p>{user.transactions.length === 0 ? "belum membayar" : "sudah membayar"}</p>
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
        </tbody> */}
        </table>
      {/* </div> */}
    </div>
  )
}

export default TransactionPage