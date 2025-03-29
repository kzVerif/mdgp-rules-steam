import Image from "next/image";
import Link from "next/link";

//hello
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center text-center space-y-6 p-4">
        <Image src={"/logo.png"} alt={"logo"} width={300} height={300} />
        <p className="text-3xl font-semibold text-gray-800 dark:text-white">มดแดงเกมพาสยินดีต้อนรับ</p>
        <div className="flex flex-col gap-4">
          <Link href={`rules_page`}>
            <button className="bg-red-600 p-3 rounded-xl cursor-pointer text-white ease-in-out duration-300 hover:bg-red-700 w-64 dark:hover:bg-red-800">
              ⚠️ กฏและเงื่อนไขของร้าน
            </button>
          </Link>
          <Link href={`change`}>
            <button className="bg-blue-600 p-3 rounded-xl cursor-pointer text-white ease-in-out duration-300 hover:bg-blue-700 w-64 dark:hover:bg-blue-800">
              ✏️ วิธีการเปลี่ยน Email และ Password
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}