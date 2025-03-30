"use client";

import { useTranslations } from "next-intl";

export default function Board() {
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

  const monthsTable = [
    { id: 1, key: "january" },
    { id: 2, key: "february" },
    { id: 3, key: "march" },
    { id: 4, key: "april" },
    { id: 5, key: "may" },
    { id: 6, key: "june" },
    { id: 7, key: "july" },
    { id: 8, key: "august" },
    { id: 9, key: "september" },
    { id: 10, key: "october" },
    { id: 11, key: "november" },
    { id: 12, key: "december" },
  ];

  return (
    <div>
      <div className="grid grid-cols-[4fr_repeat(12,_1fr)] gap-4">
        <div>{t("month.january")}</div>
        {monthsTable.map((month) => (
          <div key={month.id} className="text-center">
            {t("month." + month.key)}
          </div>
        ))}
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
