import { useRouter } from "next/router";
import { entries } from "./entries"; // Adjust the import path as necessary
import { Card, CardBody } from "@heroui/card";


export default function Page() {
    const entry = entries.firstEntry;
     return (
       <div className="flex justify-center items-center min-h-screen p-6">
         NIKLASS
       </div>
     );
  }