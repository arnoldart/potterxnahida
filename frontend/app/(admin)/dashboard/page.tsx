const DashboardPage = () => {
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
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td className="border border-black p-2">john_doe</td>
                  <td className="border border-black p-2">john.doe@example.com</td>
                  <td className="border border-black p-2">User</td>
              </tr>
              <tr>
                  <td className="border border-black p-2">jane_smith</td>
                  <td className="border border-black p-2">jane.smith@example.com</td>
                  <td className="border border-black p-2">Admin</td>
              </tr>
          </tbody>
        </table>
      {/* </div> */}
    </div>
  )
}

export default DashboardPage