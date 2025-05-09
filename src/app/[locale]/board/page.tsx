"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TABLES } from "@/constants";
import { Group } from "@/types";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import TableColumns from "./components/TableColumns/TableColumns";

export default function Board() {
  const years = ["2025", "2026", "2027", "2028", "2029", "2030"];
  const [selectedYear, setSelectedYear] = useState("2025");

  const [groups, setGroups] = useState<Group[]>([]);

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

  const createNewGroup = async () => {
    const { error, data } = await createClient().from(TABLES.groups).insert({
      name: "New group",
      created_by: "99583797-288e-4858-a3a3-09dd7c5429ec",
    });

    if (error) {
      console.log("Error creating new group:", error);
    } else {
      console.log("New group created:", data);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    const { error, data } = await createClient()
      .from(TABLES.groups)
      .select("*");

    if (error) {
      console.log("Error fetching groups:", error);
      return;
    }

    if (data) {
      setGroups(data);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <Button className="cursor-pointer">Add new expenses</Button>
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={createNewGroup}
          >
            Add new group
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" className="cursor-pointer">
              {selectedYear}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-24">
            <DropdownMenuRadioGroup
              value={selectedYear}
              onValueChange={setSelectedYear}
            >
              {years.map((year) => (
                <DropdownMenuRadioItem
                  key={year}
                  value={year}
                  className="cursor-pointer"
                >
                  {year}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="px-4 pt-4">
        <TableColumns />

        <div>
          {groups.map((group) => (
            <div key={group.id} className="bg-amber-200">
              {group.name}
            </div>
          ))}
        </div>

        {expensesTable.map((expense) => (
          <div
            key={expense.id}
            className="grid grid-cols-[4fr_repeat(12,_1fr)]"
          >
            <div className="">{expense.name}</div>
            <div className="flex justify-end">
              {expense.months.january.amount}
            </div>
            <div className="flex justify-end">
              {expense.months.february.amount}
            </div>
            <div className="flex justify-end">
              {expense.months.march.amount}
            </div>
            <div className="flex justify-end">
              {expense.months.april.amount}
            </div>
            <div className="flex justify-end">{expense.months.may.amount}</div>
            <div className="flex justify-end">{expense.months.june.amount}</div>
            <div className="flex justify-end">{expense.months.july.amount}</div>
            <div className="flex justify-end">
              {expense.months.august.amount}
            </div>
            <div className="flex justify-end">
              {expense.months.september.amount}
            </div>
            <div className="flex justify-end">
              {expense.months.october.amount}
            </div>
            <div className="flex justify-end">
              {expense.months.november.amount}
            </div>
            <div className="flex justify-end">
              {expense.months.december.amount}
            </div>
          </div>
        ))}

        {finalSortDataOnInit.map((group) => (
          <div key={group.id}>
            <div className="bg-red-200">{group.groupName}</div>
            {group.expenses.map((expense) => (
              <div
                key={expense.id}
                className="grid grid-cols-[4fr_repeat(12,_1fr)]"
              >
                <div>{expense.name}</div>
                <div className="flex justify-end">
                  {expense.months.january.amount}
                </div>
                <div className="flex justify-end">
                  {expense.months.february.amount}
                </div>
                <div className="flex justify-end">
                  {expense.months.march.amount}
                </div>
                <div className="flex justify-end">
                  {expense.months.april.amount}
                </div>
                <div className="flex justify-end">
                  {expense.months.may.amount}
                </div>
                <div className="flex justify-end">
                  {expense.months.june.amount}
                </div>
                <div className="flex justify-end">
                  {expense.months.july.amount}
                </div>
                <div className="flex justify-end">
                  {expense.months.august.amount}
                </div>
                <div className="flex justify-end">
                  {expense.months.september.amount}
                </div>
                <div className="flex justify-end">
                  {expense.months.october.amount}
                </div>
                <div className="flex justify-end">
                  {expense.months.november.amount}
                </div>
                <div className="flex justify-end">
                  {expense.months.december.amount}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
