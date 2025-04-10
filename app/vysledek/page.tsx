"use client";
import { useSearchParams } from "next/navigation";

export default function Vysledek() {
  const params = useSearchParams();
  const skore = params.get("skore");

  const interpretace =
    !skore ? "" :
    parseInt(skore) >= 80
      ? "Silný souhlas s Green Dealem."
      : parseInt(skore) >= 50
      ? "Částečný souhlas s Green Dealem."
      : parseInt(skore) >= 20
      ? "Spíše nesouhlasíte s Green Dealem."
      : "Zásadní nesouhlas s Green Dealem.";

  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Vaše skóre</h1>
      {skore ? (
        <>
          <p className="text-2xl mb-2">
            Souhlasíte s Green Dealem na <strong>{skore}%</strong>.
          </p>
          <p className="text-lg text-gray-700">{interpretace}</p>
        </>
      ) : (
        <p className="text-lg">Nebyla zjištěna žádná hodnota skóre.</p>
      )}
    </div>
  );
}
