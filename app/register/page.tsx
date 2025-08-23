'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type User = { username: string; password: string; role: '普通用户' | '管理员' };

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'普通用户' | '管理员'>('普通用户');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(u => u.username === username && u.role === userType)) {
      setError('该用户名在该角色下已存在，请更换。');
      return;
    }
    users.push({ username, password, role: userType });
    localStorage.setItem('users', JSON.stringify(users));
    alert('注册成功！请登录');
    router.replace('/login');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-600">链安 · 用户注册</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">用户名</label>
            <input className="mt-2 w-full px-4 py-2 border rounded-xl" value={username} onChange={e=>setUsername(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">密码</label>
            <input type="password" className="mt-2 w-full px-4 py-2 border rounded-xl" value={password} onChange={e=>setPassword(e.target.value)} required />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">用户类型</label>
            <select
              value={userType}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setUserType(e.target.value as Role) // ✅
              }
              className="mt-2 w-full px-4 py-2 border rounded-xl"
            >
              <option value="普通用户">普通用户</option>
              <option value="管理员">管理员</option>
            </select>
          </div>
          {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
          <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-xl">注册</button>
        </form>
        <div className="text-center text-sm text-gray-600 mt-4">
          已有账号？<a href="/login" className="text-indigo-600 underline">去登录</a>
        </div>
      </div>
    </main>
  );
}
