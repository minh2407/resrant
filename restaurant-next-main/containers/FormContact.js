import React, { useState } from 'react';

const FormContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    if (!name || !email || !date) {
      alert('Vui lòng hoàn tất form để chúng mình có thể đặt hàng nhé.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, date }),
      });

      if (response.ok) {
        alert('Reservation submitted successfully!');
        setName('');
        setEmail('');
        setDate('');
      } else {
        alert('Error submitting reservation.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className=" relative sm:grid sm:grid-cols-2 sm:gap-x-12 mb-4">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContact;





// import Button from "../components/Button";
// import Input from "../components/Input";

// const handleSubmit = (e) => {
//   e.preventDefault();

// }

// const FormContact = () => (
//   <form onSubmit={handleSubmit}>
//     <div className="sm:grid sm:grid-cols-2 sm:gap-x-12 mb-4">
//       <div>
//         <label
//           className="block font-bold text-yellow-500 mb-1"
//           htmlFor="first-name"
//         >
//           First name
//         </label>
//         <Input id="first-name" placeholder="First name" type="text" />
//       </div>
//       <div>
//         <label
//           className="block font-bold text-yellow-500 mb-1"
//           htmlFor="last-name"
//         >
//           Last name
//         </label>
//         <Input id="last-name" placeholder="Last name" type="text" />
//       </div>
//       <div>
//         <label className="block font-bold text-yellow-500 mb-1" htmlFor="date">
//           Date
//         </label>
//         <Input id="date" placeholder="Date" type="text" />
//       </div>
//       <div>
//         <label className="block font-bold text-yellow-500 mb-1" htmlFor="email">
//           Email
//         </label>
//         <Input id="email" placeholder="Email" type="email" />
//       </div>
//     </div>
//     <Button type="submit">Book now!</Button>
//   </form>
// );

// export default FormContact;
