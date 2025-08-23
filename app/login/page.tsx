'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// ① 定义角色类型别名
type Role = '普通用户' | '管理员';

// ② User 用 Role，避免每处都重复字面量联合
type User = { username: string; password: string; role: Role };

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // ③ useState 也明确为 Role
  const [role, setRole] = useState<Role>('普通用户');

  const [error, setError] = useState('');

  // 如果已经登录，直接分流
  useEffect(() => {
    const raw = localStorage.getItem('auth');
    if (raw) {
      const { role } = JSON.parse(raw) as { role: Role };
      router.replace(role === '管理员' ? '/admin' : '/user');
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find(
      (u) => u.username === username && u.password === password && u.role === role
    );
    if (!found) {
      setError('账号或密码或角色不正确，请确认已在注册页注册过。');
      return;
    }
    localStorage.setItem('auth', JSON.stringify({ username, role }));
    router.replace(role === '管理员' ? '/admin' : '/user');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-6">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-semibold text-center text-indigo-600">登录到网站</h1>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-600">用户名</label>
            <input className="w-full mt-2 px-4 py-2 border rounded-xl" value={username} onChange={(e)=>setUsername(e.target.value)} required />
          </div>

          <div>
            <label className="block text-sm text-gray-600">密码</label>
            <input type="password" className="w-full mt-2 px-4 py-2 border rounded-xl" value={password} onChange={(e)=>setPassword(e.target.value)} required />
          </div>

          <div>
            <label className="block text-sm text-gray-600">以什么身份登录</label>
            <select
              className="w-full mt-2 px-4 py-2 border rounded-xl"
              value={role}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                // ④ 这里把字符串断言为我们刚定义的 Role
                setRole(e.target.value as Role)
              }
            >
              <option value="普通用户">普通用户</option>
              <option value="管理员">管理员</option>
            </select>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button type="submit" className="w-full px-4 py-2 rounded-xl bg-indigo-600 text-white">
            登录
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 mt-4">
          还没有账号？<a href="/register" className="text-indigo-600 underline">去注册</a>
        </div>
      </div>
    </main>
  );
}
