/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Tabs } from './components/Tabs';
import { Settings, User, Bell, Shield } from 'lucide-react';

const tabsData = [
  {
    id: 'profile',
    label: 'Profile',
    content: (
      <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2.5 bg-blue-50 rounded-lg text-blue-600">
            <User size={22} />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Profile Settings</h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Manage your personal information, profile picture, and public display name. 
          Keep your profile updated to help others recognize you across the platform.
        </p>
      </div>
    ),
  },
  {
    id: 'notifications',
    label: 'Notifications',
    content: (
      <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2.5 bg-purple-50 rounded-lg text-purple-600">
            <Bell size={22} />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Notification Preferences</h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Choose what updates you want to receive and how you want to be notified. 
          You can customize email, push, and in-app notifications to suit your workflow.
        </p>
      </div>
    ),
  },
  {
    id: 'security',
    label: 'Security',
    content: (
      <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2.5 bg-green-50 rounded-lg text-green-600">
            <Shield size={22} />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Security & Privacy</h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Review your active sessions, update your password, and configure two-factor authentication. 
          We recommend enabling 2FA for an extra layer of account protection.
        </p>
      </div>
    ),
  },
  {
    id: 'advanced',
    label: 'Advanced',
    content: (
      <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2.5 bg-orange-50 rounded-lg text-orange-600">
            <Settings size={22} />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Advanced Settings</h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Configure API keys, manage connected applications, and export your account data. 
          These settings are intended for developers and power users.
        </p>
      </div>
    ),
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Account Settings</h1>
          <p className="text-gray-500">Manage your account preferences and configurations</p>
        </div>
        <Tabs tabs={tabsData} />
      </div>
    </div>
  );
}
