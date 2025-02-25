export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="
        pt-56
        max-w-screen-2xl
        m-auto
        p-4
        min-h-screen
        "
    >
      {children}
    </div>
  );
}
