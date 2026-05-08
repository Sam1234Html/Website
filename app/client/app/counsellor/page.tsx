import React from 'react';
import { Users, Clock, CheckCircle } from 'lucide-react';

export default function CounsellorDashboard() {
  return (
    <div className="min-h-screen bg-[#F5F7F5] p-6">
      <h1 className="text-2xl font-bold text-[#556B2F] mb-6">Counsellor Portal</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-[#9CAF88] p-4 rounded-2xl text-white">
          <Users size={24} />
          <p className="text-2xl font-bold mt-2">12</p>
          <p className="text-xs">Total Clients</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-[#9CAF88]">
          <Clock size={24} className="text-[#9CAF88]" />
          <p className="text-2xl font-bold mt-2 text-[#556B2F]">4</p>
          <p className="text-xs text-gray-500">Today's Sessions</p>
        </div>
      </div>

      <h3 className="font-bold mb-4">Today's Schedule</h3>
      <div className="space-y-4">
        {["Jane Doe", "John Smith"].map((name) => (
          <div key={name} className="bg-white p-4 rounded-2xl flex justify-between items-center shadow-sm">
            <span>{name}</span>
            <button className="text-[#9CAF88] font-bold">Start Session</button>
          </div>
        ))}
      </div>
    </div>
  );
}
