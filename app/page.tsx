'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const raw = localStorage.getItem('auth');
    if (!raw) {
      router.replace('/login'); // 未登录：去登录/注册页
      return;
    }
    const { role } = JSON.parse(raw);
    router.replace(role === '管理员' ? '/admin' : '/user'); // 已登录：按角色分流
  }, [router]);

  return null; // 这里不渲染任何东西
}
