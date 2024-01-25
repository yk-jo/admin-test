import { useParams } from "react-router-dom";
import Card from "@/components/Card";
import { examples } from "./input.data";

export default function PlaygroundInput() {
  const { type } = useParams();

  if (!type) return null;

  const example = examples[type];

  if (!example) return null;

  return (
    <Card title={examples[type]?.title} variant="outlined">
      {examples[type]?.element}
    </Card>
  );
}
