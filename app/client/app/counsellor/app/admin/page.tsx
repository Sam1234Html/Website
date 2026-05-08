import React from 'react';
import { ShieldCheck, BarChart, Settings } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex items-center gap-2 mb-8">
        <ShieldCheck className="text-red-500" />
        <h1 className="text-xl font-bold">Admin: Jibonge Control</h1>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm mb-6 text-center">
        <p className="text-gray-500 text-sm">Total Revenue (Pool Funds)</p>
        <p className="text-4xl font-bold text-[#556B2F] mt-2">KES 45,000</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-4 rounded-2xl flex items-center gap-4">
           <div className="bg-blue-100 p-3 rounded-full"><Users className="text-blue-600"/></div>
           <div><p className="font-bold">Therapist Approval</p><p className="text-xs text-gray-400">3 Pending</p></div>
        </div>
        <div className="bg-white p-4 rounded-2xl flex items-center gap-4">
           <div className="bg-green-100 p-3 rounded-full"><BarChart className="text-green-600"/></div>
           <div><p className="font-bold">System Logs</p><p className="text-xs text-gray-400">All systems operational</p></div>
        </div>
      </div>
    </div>
  );
}
