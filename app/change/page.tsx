"use client"
import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';

const stepsChangeEmail = [
  'กดที่คำว่า "Steam" ทางมุมบนซ้ายแล้วเลือก "การตั้งค่า"',
  'ให้กด "เปลี่ยนที่อยู่อีเมล"',
  'เลือกอันแรก',
  'ใส่รหัสยืนยันที่ถูกส่งไปยังอีเมลที่ทางร้านส่งให้ แล้วกด "ดำเนินการต่อ" (ต้อง Login อีเมลผ่านลิ้งที่ทางร้านให้เท่านั้น)',
  'ใส่อีเมลที่ลูกค้าต้องการเชื่อมกับไอดีลงในช่องว่าง จากนั้นกด "เปลี่ยนอีเมล"',
  'จะขึ้นช่องให้ใส่รหัสยืนยัน ให้นำรหัสยืนยันที่ส่งไปที่อีเมลของลูกค้ามาใส่ แล้วกด "ยืนยันการเปลี่ยนเมล"',
];

const stepsChangePassword = [
  'กดที่คำว่า "Steam" ทางมุมบนซ้ายแล้วเลือก "การตั้งค่า"',
  'ไปที่หน้า "การรักษาความปลอดภัย" แล้วกด "เปลี่ยนรหัสผ่าน"',
  'เลือกอันแรก',
  'ใส่รหัสยืนยันที่ถูกส่งไปที่อีเมลแล้วกด "ดำเนินการต่อ"',
  'ใส่รหัสผ่านใหม่ที่ลูกค้าต้องการตั้ง ลงทั้ง 2 ช่องแล้วกด "เปลี่ยนรหัสผ่าน"',
];

const StepCard = ({ step, index, imageName }: { step: string; index: number; imageName: string }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-800">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{step}</h3>
      <button 
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        onClick={() => setShowImage(!showImage)}
      >
        {showImage ? 'ซ่อนรูป' : 'ดูรูป'}
      </button>
      {showImage && (
        <div className="mt-4">
          <Image src={`/email${index + 1}.png`} alt={`step-${index + 1}`} width={500} height={250} />
        </div>
      )}
    </div>
  );
};

const StepList = ({ steps }: { steps: string[] }) => (
  <div className="space-y-6">
    {steps.map((step, index) => (
      <StepCard key={index} step={step} index={index} imageName={`email${index + 1}`} />
    ))}
  </div>
);

const StepListPassword = ({ steps }: { steps: string[] }) => (
  <div className="space-y-6">
    {steps.map((step, index) => (
      <StepCard key={index} step={step} index={index} imageName={`pass${index + 1}`} />
    ))}
  </div>
);

export default function SteamAccountSettings() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5 flex flex-col items-center dark:bg-gray-900">
      <Head>
        <title>วิธีเปลี่ยนอีเมลและรหัสผ่าน Steam</title>
        <meta name="description" content="คำแนะนำในการเปลี่ยนอีเมลและรหัสผ่านสำหรับบัญชี Steam" />
      </Head>
      <main className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-lg dark:bg-gray-800">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white underline">วิธีเปลี่ยนอีเมลและรหัสผ่าน Steam</h1>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-300 underline">วิธีเปลี่ยนอีเมล</h2>
          <StepList steps={stepsChangeEmail} />
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-300 underline">วิธีเปลี่ยนรหัสผ่าน Steam</h2>
          <StepListPassword steps={stepsChangePassword} />
        </section>
      </main>
      
      <div className='flex justify-between w-full max-w-3xl mt-6'>
        <Link href="/">
          <button className="bg-blue-600 p-3 rounded-xl cursor-pointer text-white ease-in-out duration-300 hover:bg-blue-700 shadow-md dark:hover:bg-blue-800">
            🏠 กลับหน้าหลัก
          </button>
        </Link>
        <Link href="/rules_page">
          <button className="mr-3 bg-red-600 p-3 rounded-xl cursor-pointer text-white ease-in-out duration-300 hover:bg-red-700 shadow-md dark:hover:bg-red-800">
            ⚠️ กฏและเงื่อนไขของร้าน
          </button>
        </Link>
      </div>
    </div>
  );
}
