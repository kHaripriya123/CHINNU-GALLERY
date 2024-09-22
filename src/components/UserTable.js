import { useEffect, useState } from "react";

const UserTable = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {

        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://dummy.restapiexample.com/api/v1/employees");
        const json = await data.json();
        console.log(json);
        setUserData(json.data);
    }

    return (
        <div>

            <table className="mb-24 table-auto w-full">
                <thead className="border border-black px-4 py-2">
                    <tr>
                        <th>id</th>
                        <th>employee_name</th>
                        <th>employee_salary</th>
                        <th>employee_age</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((info) => (
                        <tr>
                            <td className="border border-black px-4 py-2">{info.id}</td>
                            <td className="border border-black px-4 py-2">{info.employee_name}</td>
                            <td className="border border-black px-4 py-2">{info.employee_salary}</td>
                            <td className="border border-black px-4 py-2">{info.employee_age}</td>

                        </tr>))}
                </tbody>
            </table>

        </div>
    )
}
export default UserTable;