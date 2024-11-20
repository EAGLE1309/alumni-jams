export default function AuthLayout({ children }) {
  return (
    <div className="h-full flex flex-col gap-y-5 px-3 overflow-hidden items-center justify-center bg-zinc-200 dark:bg-black">
      <div className="md:h-auto md:w-[420px]">{children}</div>
    </div>
  );
}
