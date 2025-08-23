'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// 和你当前首页一致的 Section 类型
interface Section {
  home: JSX.Element;
  dataSecurity: JSX.Element;
  nodeSecurity: JSX.Element;
  securityConsensus: JSX.Element;
  smartContractControl: JSX.Element;
  situationAwareness: JSX.Element;
  userManagement: JSX.Element;
}

export default function AdminPage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<keyof Section>("home");

  // 进入守卫：必须是管理员才可访问
  useEffect(() => {
    const raw = typeof window !== "undefined" ? localStorage.getItem("auth") : null;
    if (!raw) {
      router.replace("/login");
      return;
    }
    const { role } = JSON.parse(raw);
    if (role !== "管理员") {
      router.replace("/user");
    }
  }, [router]);

  // 退出登录
  const logout = () => {
    localStorage.removeItem("auth");
    router.replace("/login");
  };

  const sections: Section = {
    home: (
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">欢迎来到后台管理系统</h2>
        <p className="text-gray-600">选择左侧菜单中的功能模块来开始使用系统。</p>
      </div>
    ),
    dataSecurity: (
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">链上数据安全管控</h2>
        <p className="text-gray-600">在此模块中，您可以配置链上数据安全相关的策略和设置。</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-100 p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-blue-600">数据修改审核</h3>
            <p className="text-sm text-gray-600">审核链上数据的修改操作，确保合规性。</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-blue-600">链上数据审计</h3>
            <p className="text-sm text-gray-600">对链上所有数据的修改进行审计，记录操作历史。</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-blue-600">数据安全加固</h3>
            <p className="text-sm text-gray-600">实施数据加密、权限控制等措施加强数据安全。</p>
          </div>
        </div>
      </div>
    ),
    nodeSecurity: (
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">节点安全威胁检测</h2>
        <p className="text-gray-600">此模块帮助检测和预防网络中节点的安全威胁。</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-100 p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-yellow-600">流量监控</h3>
            <p className="text-sm text-gray-600">监控节点的网络流量，及时发现异常活动。</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-yellow-600">风险识别</h3>
            <p className="text-sm text-gray-600">实时识别节点的潜在安全风险并采取防护措施。</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-yellow-600">异常行为分析</h3>
            <p className="text-sm text-gray-600">通过大数据分析和机器学习，识别异常节点行为。</p>
          </div>
        </div>
      </div>
    ),
    securityConsensus: (
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">安全共识参数配置</h2>
        <p className="text-gray-600">配置和调整网络中的共识机制，保障系统安全。</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-100 p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-green-600">共识协议配置</h3>
            <p className="text-sm text-gray-600">设置和调整共识协议，以提高网络的效率。</p>
          </div>
          <div className="bg-green-100 p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-green-600">节点验证机制</h3>
            <p className="text-sm text-gray-600">配置节点的验证规则，确保节点的合法性。</p>
          </div>
          <div className="bg-green-100 p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-green-600">网络安全策略</h3>
            <p className="text-sm text-gray-600">为网络中的节点配置安全策略，防止攻击和滥用。</p>
          </div>
        </div>
      </div>
    ),
    smartContractControl: (
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">智能合约访问控制</h2>
        <p className="text-gray-600">管理和控制智能合约的访问权限及其执行情况。</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-100 p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-red-600">合约调用监控</h3>
            <p className="text-sm text-gray-600">实时监控智能合约的调用情况，防止恶意操作。</p>
          </div>
          <div className="bg-red-100 p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-red-600">访问权限管理</h3>
            <p className="text-sm text-gray-600">定义和管理智能合约的访问权限。</p>
          </div>
          <div className="bg-red-100 p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-red-600">合约执行日志</h3>
            <p className="text-sm text-gray-600">记录智能合约的执行日志，便于后期审计。</p>
          </div>
        </div>
      </div>
    ),
    situationAwareness: (
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">链上安全态势感知</h2>
        <p className="text-gray-600">实时感知链上安全态势，确保及时防范潜在威胁。</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-100 p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-purple-600">安全态势分析</h3>
            <p className="text-sm text-gray-600">分析链上的安全状态，发现潜在的风险。</p>
          </div>
          <div className="bg-purple-100 p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-purple-600">数据可视化</h3>
            <p className="text-sm text-gray-600">将安全数据可视化，帮助决策者快速判断。</p>
          </div>
          <div className="bg-purple-100 p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-purple-600">风险预警</h3>
            <p className="text-sm text-gray-600">基于态势感知，实时预警潜在风险。</p>
          </div>
        </div>
      </div>
    ),
    userManagement: (
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">用户信息管理</h2>
        <p className="text-gray-600">在此页面中，您可以管理用户信息并进行注册。</p>
        <div className="mt-6">
          <Link href="/register">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              注册新用户
            </button>
          </Link>
        </div>
      </div>
    ),
  };

  return (
    <div className="flex h-screen">
      {/* 左侧菜单栏 */}
      <div className="w-64 bg-blue-800 text-white p-6">
        <h2 className="text-xl font-semibold mb-8">链安后台管理</h2>
        <nav className="space-y-4">
          <a href="#home" className="block text-lg hover:text-indigo-300" onClick={() => setActiveSection("home")}>首页</a>
          <a href="#dataSecurity" className="block text-lg hover:text-indigo-300" onClick={() => setActiveSection("dataSecurity")}>链上数据安全管控</a>
          <a href="#nodeSecurity" className="block text-lg hover:text-indigo-300" onClick={() => setActiveSection("nodeSecurity")}>节点安全威胁检测</a>
          <a href="#securityConsensus" className="block text-lg hover:text-indigo-300" onClick={() => setActiveSection("securityConsensus")}>安全共识参数配置</a>
          <a href="#smartContractControl" className="block text-lg hover:text-indigo-300" onClick={() => setActiveSection("smartContractControl")}>智能合约访问控制</a>
          <a href="#situationAwareness" className="block text-lg hover:text-indigo-300" onClick={() => setActiveSection("situationAwareness")}>链上安全态势感知</a>
          <a href="#userManagement" className="block text-lg hover:text-indigo-300" onClick={() => setActiveSection("userManagement")}>用户信息管理</a>
        </nav>
      </div>

      {/* 右侧内容区域 */}
      <div className="flex-1 bg-gray-50 p-8">
        {/* 顶部导航 */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">系统功能设置</h1>
          <button
            onClick={logout}
            className="px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            退出登录
          </button>
        </header>

        {/* 右侧展示内容 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          {sections[activeSection]}
        </div>

        <footer className="text-center text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} 链安 · 安全管理系统
        </footer>
      </div>
    </div>
  );
}

