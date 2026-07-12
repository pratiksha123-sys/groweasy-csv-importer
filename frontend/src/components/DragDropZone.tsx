'use client';
import { useState } from 'react';

export default function DragDropZone({ onFileSelect }: { onFileSelect: (file: File) => void }) {
  const [isDragActive, setIsDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileSelect(e.dataTransfer.files[0]);
    }
  };

  return (
    <div 
      onDragEnter={handleDrag} onDragOver={handleDrag} onDragLeave={handleDrag} onDrop={handleDrop}
      className={`border-2 border-dashed rounded-xl p-10 text-center transition-all duration-200 ${
        isDragActive ? 'border-teal-400 bg-teal-950/20' : 'border-zinc-800 bg-zinc-900/50'
      }`}
    >
      <div className="text-4xl mb-3 text-zinc-500">📥</div>
      <p className="text-zinc-200 font-medium text-lg">Drop your CSV file here</p>
      <p className="text-zinc-500 text-sm mt-1 mb-6">or click to browse files (max 5MB)</p>
      <input 
        type="file" accept=".csv" id="csv-upload" className="hidden" 
        onChange={(e) => e.target.files?.[0] && onFileSelect(e.target.files[0])}
      />
      <label htmlFor="csv-upload" className="bg-gradient-to-r from-teal-500 to-emerald-500 px-6 py-3 rounded-lg text-white font-semibold cursor-pointer text-sm shadow-lg hover:brightness-110 transition">
        Browse Files
      </label>
    </div>
  );
}