"use client";

import { Month } from "@/types";
import { createClient } from "@/utils/supabase/client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Board() {
  const [months, setMonths] = useState<Month[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const t = useTranslations("Board");
  const finalSortDataOnInit = [
    {
      id: 1,
      groupName: "Fixed expenses",
      expenses: [
        {
          id: 1,
          name: "Netflix",
          year: 2025,
          group: "Fixed expenses",
          months: {
            january: {
              amount: 100,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            february: {
              amount: 200,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            march: {
              amount: 300,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            april: {
              amount: 400,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            may: {
              amount: 500,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            june: {
              amount: 600,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            july: {
              amount: 700,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            august: {
              amount: 800,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            september: {
              amount: 900,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            october: {
              amount: 1000,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            november: {
              amount: 1100,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            december: {
              amount: 1200,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
          },
        },
      ],
    },
    {
      id: 2,
      groupName: "New",
      expenses: [
        {
          id: 2,
          name: "Squash",
          year: 2025,
          group: "New",
          months: {
            january: {
              amount: 100,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            february: {
              amount: 200,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            march: {
              amount: 300,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            april: {
              amount: 400,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            may: {
              amount: 500,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            june: {
              amount: 600,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            july: {
              amount: 700,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            august: {
              amount: 800,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            september: {
              amount: 900,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            october: {
              amount: 1000,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            november: {
              amount: 1100,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
            december: {
              amount: 1200,
              transactionsDetials: [
                { id: 1, amount: 100, date: new Date() },
                { id: 2, amount: 100, date: new Date() },
                { id: 3, amount: 100, date: new Date() },
              ],
            },
          },
        },
      ],
    },
  ];
  const groupsTable = [
    { id: 1, name: "Fixed expenses" },
    { id: 2, name: "New" },
  ];
  const expensesTable = [
    {
      id: 1,
      name: "Netflix",
      year: 2025,
      group: "Fixed expenses",
      months: {
        january: {
          amount: 100,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        february: {
          amount: 200,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        march: {
          amount: 300,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        april: {
          amount: 400,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        may: {
          amount: 500,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        june: {
          amount: 600,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        july: {
          amount: 700,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        august: {
          amount: 800,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        september: {
          amount: 900,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        october: {
          amount: 1000,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        november: {
          amount: 1100,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        december: {
          amount: 1200,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
      },
    },
    {
      id: 2,
      name: "Squash",
      year: 2025,
      group: "New",
      months: {
        january: {
          amount: 100,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        february: {
          amount: 200,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        march: {
          amount: 300,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        april: {
          amount: 400,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        may: {
          amount: 500,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        june: {
          amount: 600,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        july: {
          amount: 700,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        august: {
          amount: 800,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        september: {
          amount: 900,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        october: {
          amount: 1000,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        november: {
          amount: 1100,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
        december: {
          amount: 1200,
          transactionsDetials: [
            { id: 1, amount: 100, date: new Date() },
            { id: 2, amount: 100, date: new Date() },
            { id: 3, amount: 100, date: new Date() },
          ],
        },
      },
    },
  ];

  useEffect(() => {
    fetchMonths();
  }, []);

  const fetchMonths = async () => {
    const supabase = await createClient();
    const { data } = await supabase.from("months").select();

    if (data) {
      setMonths(data);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-[4fr_repeat(12,_1fr)] gap-4">
        <div></div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          months.map((month) => (
            <div key={month.id} className="text-center">
              {t("month." + month.key)}
            </div>
          ))
        )}
      </div>

      <div>
        {groupsTable.map((group) => (
          <div key={group.id}>{group.name}</div>
        ))}
      </div>

      {expensesTable.map((expense) => (
        <div key={expense.id} className="grid grid-cols-[4fr_repeat(12,_1fr)] gap-4">
          <div>{expense.name}</div>
          <div>{expense.months.january.amount}</div>
          <div>{expense.months.february.amount}</div>
          <div>{expense.months.march.amount}</div>
          <div>{expense.months.april.amount}</div>
          <div>{expense.months.may.amount}</div>
          <div>{expense.months.june.amount}</div>
          <div>{expense.months.july.amount}</div>
          <div>{expense.months.august.amount}</div>
          <div>{expense.months.september.amount}</div>
          <div>{expense.months.october.amount}</div>
          <div>{expense.months.november.amount}</div>
          <div>{expense.months.december.amount}</div>
        </div>
      ))}

      {finalSortDataOnInit.map((group) => (
        <div key={group.id}>
          <div className="bg-red-500">{group.groupName}</div>
          {group.expenses.map((expense) => (
            <div key={expense.id} className="grid grid-cols-[4fr_repeat(12,_1fr)] gap-4">
              <div>{expense.name}</div>
              <div>{expense.months.january.amount}</div>
              <div>{expense.months.february.amount}</div>
              <div>{expense.months.march.amount}</div>
              <div>{expense.months.april.amount}</div>
              <div>{expense.months.may.amount}</div>
              <div>{expense.months.june.amount}</div>
              <div>{expense.months.july.amount}</div>
              <div>{expense.months.august.amount}</div>
              <div>{expense.months.september.amount}</div>
              <div>{expense.months.october.amount}</div>
              <div>{expense.months.november.amount}</div>
              <div>{expense.months.december.amount}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
