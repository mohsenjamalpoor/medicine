import React, { useState } from "react";

export default function InstructionsPage() {
  const [weight, setWeight] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [instruction, setInstruction] = useState("");

  const generateInstruction = () => {
    if (!weight || !diagnosis) {
      setInstruction("لطفاً وزن کودک و تشخیص بیماری را وارد کنید.");
      return;
    }

    // مثال ساده از دستور اولیه (در دنیای واقعی نیاز به دیتابیس پزشکی داریم)
    let instructionText = `برای کودک با وزن ${weight} کیلوگرم و تشخیص "${diagnosis}":\n`;

    // دارویی
    if (diagnosis.toLowerCase().includes("تب")) {
      instructionText += `- دارویی: پاراستامول 10 میلی‌گرم به‌ازای هر کیلوگرم وزن بدن هر 6 ساعت.\n`;
    } else if (diagnosis.toLowerCase().includes("اسهال")) {
      instructionText += `- دارویی: او آر اس پس از هر بار دفع.\n`;
    } else {
      instructionText += `- دارویی: طبق نظر پزشک متخصص.\n`;
    }

    // مراقبتی
    instructionText += `- مراقبتی: استراحت کافی، مصرف مایعات و نظارت بر علائم جدید.`

    setInstruction(instructionText);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">دستورها</h2>
     

      <div className="mb-4">
        <label className="block mb-1 font-semibold">وزن کودک (کیلوگرم):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">تشخیص بیماری:</label>
        <input
          type="text"
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <button
        onClick={generateInstruction}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        تولید دستور
      </button>

      {instruction && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow">
          <h3 className="text-lg font-bold mb-2  text-blue-600">دستور پیشنهادی:</h3>
          <pre className="whitespace-pre-wrap text-gray-700">{instruction}</pre>
        </div>
      )}
    </div>
  );
}
