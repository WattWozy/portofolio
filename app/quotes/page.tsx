import { Card, CardHeader } from "@heroui/card";

import { title } from "@/components/primitives";

export default function PricingPage() {
  return (
    <div>
      <h1 className={title({ color: "blue", size: "lg", fullWidth: true })}>
        Quotes:{" "}
      </h1>
      <br />
      <br />
      <br />

      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-small uppercase font-bold">
            {"Grandes problemas en problemas pequeños."}
          </p>
          <small className="text-default-500">I.Salmerón</small>
        </CardHeader>
      </Card>
      <br />
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-small uppercase font-bold">
            {"Hard work pays off, but more often passionate work opens doors that seem so out-of-reach."}
          </p>
          <small className="text-default-500">A.Hirvonen</small>
        </CardHeader>
      </Card>
      <br />
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-small uppercase font-bold">
            {"Ingen minns en fegis"}
          </p>
          <small className="text-default-500">F.Riggers</small>
        </CardHeader>
      </Card>
      <br />
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-small uppercase font-bold">
            {"You snooze: you lose"}
          </p>
          <small className="text-default-500">T.Strömberg</small>
        </CardHeader>
      </Card>
      <br />
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-small uppercase font-bold">
            {"Risk it for the biscuit"}
          </p>
          <small className="text-default-500">E.Zetterberg</small>
        </CardHeader>
      </Card>
      <br />
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-small uppercase font-bold">
            {
              "The important is not to have a perfect plan: it's the ability to adapt to incoming changes."
            }
          </p>
          <small className="text-default-500">S.Sennerö</small>
        </CardHeader>
      </Card>
      <br />
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-small uppercase font-bold">
            {
              "Try to understand why things don't work... but also when they do! That way you learn!"
            }
          </p>
          <small className="text-default-500">N.Fredstam</small>
        </CardHeader>
      </Card>
      <br />
    </div>
  );
}
