import { useRef, useState } from "react";

import {
  Card,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

const UserForm = () => {
  const [message, setMessage] = useState('');
  const name = useRef(null);
  const salary = useRef(null);
  const age = useRef(null);


  const submitData = async () => {
    console.log(name.current.value);
    console.log(salary.current.value);
    console.log(age.current.value);

    const userDetails = {
      name: name.current.value,
      salary: salary.current.value,
      age: age.current.value
    }

    try {
      const response = await fetch('https://dummy.restapiexample.com/api/v1/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMessage('User created successfully!');
      console.log('Success:', data);
    } catch (error) {
      setMessage('Error creating user. Please try again.');
      console.error('Error:', error);
    }
    setTimeout(() => {
      setMessage('');
    }, 3000);

  }

  return (
    <div className="w-3/12 mx-auto left-0 right-0 rounded-3xl">

      <Card color="bg-blue-800" shadow={false}>
        <form onSubmit={(e) => e.preventDefault()} className="mt-4  w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="black" className="-mb-2 pb-1">
              Name
            </Typography>
            <Input inputRef={name} type="text" size="lg" placeholder="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
            <Typography variant="h6" color="black" className="-mb-2 pb-1">
              Salary
            </Typography>
            <Input inputRef={salary} type="number" size="lg" placeholder="salary"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
            <Typography variant="h6" color="black" className="-mb-2 pb-1">
              Age
            </Typography>
            <Input inputRef={age} type="number" size="lg" placeholder="age"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
            <Button className="mt-3 bg-customPurple" onClick={submitData}>Submit</Button>
          </div>
        </form>
      </Card>
      {message && (
        <div className={`p-4 mb-4 text-center text-white ${message.includes('Error') ? 'bg-red-500' : 'bg-green-500'} rounded`}>
          {message}
        </div>
      )}

    </div>
  )
}

export default UserForm;