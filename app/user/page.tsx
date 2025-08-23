'use client';

import React from "react";

interface UserSection {
  home: React.ReactNode;
  profile: React.ReactNode;
  notifications: React.ReactNode;
  security: React.ReactNode;
  support: React.ReactNode;
}

export default function UserPage() {
  const [activeSection, setActiveSection] = useState<keyof UserSection>("home");

  const sections: UserSection = {
    home: (
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">欢迎来到用户界面</h2>
        <p className="text-gray-600">在这里你可以查看通知、管理个人资料、调整安全设置。</p>
      </div>
    ),
    profile: (
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">个人资料</h2>
        <p className="text-gray-600">这里展示并允许修改用户的基本信息。</p>
        <div className="bg-blue-100 p-6 rounded-xl shadow-md">
          <p className="text-sm text-gray-700">用户名：demo_user</p>
          <p className="text-sm text-gray-700">邮箱：demo@example.com</p>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            编辑资料
          </button>
        </div>
      </div>
    ),
    notifications: (
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">消息通知</h2>
        <ul className="space-y-3">
          <li className="p-4 bg-green-100 rounded-lg shadow text-gray-800">📢 系统升级将在今晚 12 点进行</li>
          <li className="p-4 bg-yellow-100 rounded-lg shadow text-gray-800">⚠️ 检测到新的安全提示，请查看</li>
        </ul>
      </div>
    ),
    security: (
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">安全设置</h2>
        <p className="text-gray-600">在这里可以修改密码、绑定双重认证。</p>
        <div className="flex gap-4 mt-4">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            修改密码
          </button>
          <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
            开启双重认证
          </button>
        </div>
      </div>
    ),
    support: (
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">帮助与支持</h2>
        <p className="text-gray-600">如果你遇到问题，可以提交工单或联系客服。</p>
        <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          提交工单
        </button>
      </div>
    ),
  };

  return (
    <div className="flex h-screen">
      {/* 左侧菜单 */}
      <div className="w-64 bg-indigo-700 text-white p-6">
        <h2 className="text-xl font-semibold mb-8">链安用户中心</h2>
        <nav className="space-y-4">
          <a href="#home" onClick={() => setActiveSection("home")} className="block text-lg hover:text-indigo-300">首页</a>
          <a href="#profile" onClick={() => setActiveSection("profile")} className="block text-lg hover:text-indigo-300">个人资料</a>
          <a href="#notifications" onClick={() => setActiveSection("notifications")} className="block text-lg hover:text-indigo-300">消息通知</a>
          <a href="#security" onClick={() => setActiveSection("security")} className="block text-lg hover:text-indigo-300">安全设置</a>
          <a href="#support" onClick={() => setActiveSection("support")} className="block text-lg hover:text-indigo-300">帮助与支持</a>
        </nav>
        <div className="mt-10">
          <button className="px-4 py-2 w-full bg-red-500 text-white rounded-lg hover:bg-red-600">
            退出登录
          </button>
        </div>
      </div>

      {/* 右侧内容 */}
      <div className="flex-1 bg-gray-50 p-8">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">用户功能区</h1>
        </header>
        <div className="bg-white p-6 rounded-xl shadow-md">{sections[activeSection]}</div>
        <footer className="text-center text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} 链安 · 用户中心
        </footer>
      </div>
    </div>
  );
}
