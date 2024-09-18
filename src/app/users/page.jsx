"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypographyH3 } from "@/components/typography/h3";
import { UsersTable } from "./table";
import { UserCreateDialog } from "./user-create-dialog";
import { useEffect, useState } from "react";
import { UserDeleteDialog } from "./user-delete-dialog";

const Users = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const [data, setData] = useState([]);
  const [showAmount, setShowAmount] = useState(10);

  const render = (type, extradata) => {
    if (type == "create") {
      setData([...data, extradata]);
    } else if (type == "delete") {
      setData([...data].filter((elem) => elem.id != extradata))
    } else if (type == "change") {
      setData(data.map(elem => {
        if (elem.id == extradata.id) {
          return extradata
        }
        return elem
      }))
    }
  }

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <TypographyH3>Хэрэглэгчид</TypographyH3>
            <Button variant="outline" onClick={() => setCreateModalOpen(true)}>
              Шинээр нэмэх
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <UsersTable data={data} amount={showAmount} onDelete={render} render={render} />
          <div className="flex justify-center p-8">
            <Button variant="outline" onClick={() => {
              setShowAmount(showAmount + 10);
            }}>Load more...</Button>
          </div>
        </CardContent>
      </Card>
      <UserCreateDialog open={createModalOpen} onClose={setCreateModalOpen} onCreate={render} />
    </div>
  );
};

export default Users;