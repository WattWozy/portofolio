import { title } from "@/components/primitives";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";

export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>Pricing</h1>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
      </Card>
    </div>
    
  );
}
