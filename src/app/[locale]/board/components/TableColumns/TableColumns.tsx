import { Month } from "@/types";
import { createClient } from "@/utils/supabase/client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function TableColumns() {
  const [months, setMonths] = useState<Month[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const t = useTranslations("Board");

  useEffect(() => {
    fetchMonths();
  }, []);

  const fetchMonths = async () => {
    const supabase = await createClient();
    const { data } = await supabase.from("months").select();

    if (data) {
      setMonths(data);
    }
    setIsLoading(false);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-[4fr_repeat(12,_1fr)]">
      <div></div>
      {months.map((month) => (
        <div key={month.id} className="flex justify-end text-center">
          {t("month." + month.key)}
        </div>
      ))}
    </div>
  );
}
