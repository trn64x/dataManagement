export default function CtaButton({ children }) {
  return (
    <button className="p-3 font-bold max-w-md bg-green-600 cursor-pointer w-full rounded-lg border-1">
      {children}
    </button>
  );
}
