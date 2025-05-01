import React, { useState } from 'react';

const AppointmentBooking = () => {
  const [selectedMode, setSelectedMode] = useState('Video');
  const [selectedDate, setSelectedDate] = useState('2022-10-10');
  const [selectedTime, setSelectedTime] = useState(null);

  const sessionModes = [
    { type: 'In-Clinic', duration: '45 Mins' },
    { type: 'Video', duration: '45 Mins' },
    { type: 'Chat', duration: '10 Mins' },
  ];

  const dates = [
    { date: '2022-10-10', label: 'Mon, 10 Oct', slots: 10 },
    { date: '2022-10-11', label: 'Tue, 11 Oct', slots: 2 },
    { date: '2022-10-12', label: 'Wed, 12 Oct', slots: 5 },
  ];

  const timeSlots = {
    morning: ['09:00 AM', '09:30 AM', '10:00 AM', '10:15 AM', '10:45 AM', '11:00 AM'],
    evening: ['04:00 PM', '04:15 PM', '04:30 PM', '04:45 PM', '05:15 PM'],
  };

  return (
    <div className="max-w-full sm:max-w-md mx-auto p-4 border rounded-xl shadow-sm space-y-6 font-sans">
      <div className="text-sm text-gray-500">Appointment Fee</div>
      <div className="text-lg font-semibold text-green-600">₹699.00</div>

      <div>
        <h3 className="text-sm font-medium mb-2 border-b pb-1">Select your mode of session</h3>
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {sessionModes.map(({ type, duration }) => (
            <button
              key={type}
              onClick={() => setSelectedMode(type)}
              className={`border rounded-lg px-4 py-2 text-sm w-full sm:w-auto ${
                selectedMode === type
                  ? 'bg-green-100 border-green-600 text-green-800 font-medium'
                  : 'text-gray-600'
              }`}
            >
              {type}
              <div className="text-xs text-gray-400">{duration}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Pick a time slot</h3>
        <div className="flex items-center space-x-2 overflow-x-auto">
          {dates.map(({ date, label, slots }) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`rounded-lg border px-3 py-2 text-sm min-w-max ${
                selectedDate === date ? 'bg-green-100 border-green-600 text-green-800' : 'text-gray-600'
              }`}
            >
              <div>{label}</div>
              <div className={`text-xs ${slots < 3 ? 'text-red-500' : 'text-gray-400'}`}>
                {String(slots).padStart(2, '0')} slots
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="font-medium text-sm mb-2">Morning</div>
        <div className="flex flex-wrap gap-2">
          {timeSlots.morning.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedTime(slot)}
              className={`px-4 py-2 rounded-md border text-sm w-full sm:w-auto ${
                selectedTime === slot
                  ? 'bg-green-700 text-white'
                  : 'text-gray-700 bg-white'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>

        <div className="font-medium text-sm mt-4 mb-2">Evening</div>
        <div className="flex flex-wrap gap-2">
          {timeSlots.evening.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedTime(slot)}
              className={`px-4 py-2 rounded-md border text-sm w-full sm:w-auto ${
                selectedTime === slot
                  ? 'bg-green-700 text-white'
                  : 'text-gray-700 bg-white'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <button className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition">
        Make An Appointment
      </button>
    </div>
  );
};

export default AppointmentBooking;
