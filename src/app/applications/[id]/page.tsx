
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  
  if (isNaN(id)) {
    throw redirect('/not-found');
  }
  
  return <div>Application ID: {params.id}</div>;
}
