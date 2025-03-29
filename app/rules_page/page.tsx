import Link from "next/link";

export default function FreshAccountRules() {
  return (
    <div className="max-w-3xl mx-auto p-6 dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">🌟 กฎและเงื่อนไขบัญชีเกมมือ 1</h1>
      <div className="border border-gray-300 rounded-lg shadow-lg dark:border-gray-700">
        <div className="p-6 space-y-4 text-gray-700 dark:text-gray-300">
          <p className="text-lg font-semibold">รบกวนอ่านเพื่อประโยชน์ต่อตัวลูกค้าเองครับ</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>หากซื้อไปแล้วจะไม่มีการคืนสินค้าทุกกรณี (ยกเว้นสินค้ามีปัญหาที่เกิดจากความผิดพลาดของทางร้าน)</li>
            <li>ในกรณีที่ต้องคืนเงิน หากลูกค้าโอนเงินด้วย True Wallet ทางร้านจะไม่คืนค่าธรรมเนียม</li>
            <li>ถ้าลูกค้าชำระเงินแล้วจะถือว่ายอมรับกฎและเงื่อนไขของทางร้านแล้ว</li>
            <li>ทางร้านสามารถปรับเปลี่ยนกฎและเงื่อนไขได้โดยไม่ได้แจ้งให้ทราบล่วงหน้า</li>
            <li>ก่อนซื้อโปรดตรวจสอบเครื่องของลูกค้าก่อนว่าสามารถเล่นเกมนั้นได้หรือไม่ เช่น สเปคคอมไม่ถึง เป็นต้น หากเกิดปัญหาทางร้านจะไม่รับผิดชอบ</li>
            <li>ทางร้านจะช่วยลูกค้าให้เข้าถึงไอดีได้ และช่วยแก้ปัญหาเบื้องต้นให้เท่านั้น (ถ้ามี) ถ้าปัญหาที่เกิดขึ้นทางร้านไม่สามารถช่วยได้ จะขอยุติการช่วยเหลือ</li>
            <li>หากลูกค้าไม่ทำตามขั้นตอนที่ทางร้านแจ้งแล้วเกิดปัญหา จะไม่รับผิดชอบทุกกรณี</li>
            <li>บัญชีมือ 1 มีประกันไอดีโดนดึง 90 วัน หากนำไอดีไปขายต่อประกันจะหมดทันที</li>
          </ul>
        </div>
      </div>

      <div className='flex justify-between w-full max-w-3xl mt-6'>
        <Link href="/">
          <button className="bg-blue-600 p-3 rounded-xl cursor-pointer text-white ease-in-out duration-300 hover:bg-blue-700 shadow-md dark:hover:bg-blue-800">
            🏠 กลับหน้าหลัก
          </button>
        </Link>
        <Link href="/change">
          <button className="bg-blue-600 p-3 rounded-xl cursor-pointer text-white ease-in-out duration-300 hover:bg-blue-700 shadow-md dark:hover:bg-blue-800">
            ✏️ วิธีการเปลี่ยน Emal และ Password
          </button>
        </Link>
      </div>
    </div>
  );
}