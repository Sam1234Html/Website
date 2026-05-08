import React from 'react';
import { Calendar, Video, MapPin, Wallet } from 'lucide-react';

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-[#F5F7F5] p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-[#556B2F]">Welcome Back, Client</h1>
        <p className="text-gray-500">Your next step to wellness is one click away.</p>
      </header>

      <div className="grid gap-6">
        {/* Booking Card */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#9CAF88]/20">
          <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
            <Calendar className="text-[#9CAF88]" /> Book a Session
          </h2>
          <select className="w-full p-4 rounded-xl bg-gray-50 border-none mb-4">
            <option>Select Session Type</option>
            <option>Online (Google Meet)</option>
            <option>In-Person (Mall Visit)</option>
          </select>
          <button className="w-full bg-[#9CAF88] text-white py-4 rounded-xl font-bold">
            Proceed to Payment (M-Pesa)
          </button>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="font-bold mb-4">Upcoming Sessions</h3>
          <div className="flex items-center justify-between p-4 bg-[#E1E8E1] rounded-2xl">
            <div>
              <p className="font-bold text-[#556B2F]">Therapy Session</p>
              <p className="text-sm text-gray-600">Today at 2:00 PM</p>
            </div>
            <a href="#" className="bg-white text-[#556B2F] px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
              <Video size={16} /> Join Meet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
        }
