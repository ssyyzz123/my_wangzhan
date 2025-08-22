'use client'; // 声明这是客户端组件

import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("普通用户");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`注册成功！用户名：${username}，用户类型：${userType}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-600">
          链安 · 用户注册
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="username">
              用户名
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 w-full px-4 py-2 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="请输入用户名"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="password">
              密码
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full px-4 py-2 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="请输入密码"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600" htmlFor="userType">
              用户类型
            </label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="mt-2 w-full px-4 py-2 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="普通用户">普通用户</option>
              <option value="管理员">管理员</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            注册
          </button>
        </form>
      </div>
    </main>
  );
}
