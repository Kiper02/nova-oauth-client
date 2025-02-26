import Link from "next/link";

interface IItemApplicationProps {
  id: string;
  name: string,
  date: string;
}

export function ItemApplications({ name, date, id }: IItemApplicationProps) {
  return (
    <Link
    href={`/applications/${id}`}
    >
    <div className="
      rounded-2xl
      border border-[#5d5d5d]
      w-full
      h-[112px]
      flex
      flex-col
      gap-y-1
      p-4 
    ">
      <h1 className="
      text-3xl 
      font-bold
      ">{name}
      </h1>
      <h4 className="
      font-medium
      text-lg
      ">{date}</h4>
    </div>
    </Link>
  );
}
