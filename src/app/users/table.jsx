"use client";

import * as React from "react";

import { Table, TableCell, TableHead, TableHeader, TableRow, TableBody } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoreHorizontal, Settings } from "lucide-react";
import { UserChangeDialog } from "./user-change-dialog";
import { useState } from "react";
import { UserDeleteDialog } from "./user-delete-dialog";

export function UsersTable(props) {
  const { data, amount, render } = props;
  const showAmount = amount;
  const [searchVal, setSearchVal] = React.useState("");
  const [changeModalOpen, setChangeModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(0);
  const [deletingId, setDeletingId] = useState(0);

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input placeholder="Нэрээр хайх..." className="max-w-sm" onInput={(e) => { setSearchVal(e.target.value) }} />
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1">#</TableHead>
              <TableHead className="w-1">Зураг</TableHead>
              <TableHead className="w-36">Овог</TableHead>
              <TableHead className="w-36">Нэр</TableHead>
              <TableHead>И-Мэйл</TableHead>
              <TableHead className="w-1">
                <Settings />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {searchVal.length == 0 ? data?.slice(0, showAmount).map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableHead>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={item.imageUrl} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableHead>
                <TableHead>{item.lastname}</TableHead>
                <TableHead>{item.firstname}</TableHead>
                <TableHead>{item.email}</TableHead>
                <TableHead className="w-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="w-8 h-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => navigator.clipboard.writeText(item.email)}>Copy Email</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => { setChangeModalOpen(true); setEditingId(item) }}>Edit</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => { setDeleteModalOpen(true); setDeletingId(item) }}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableHead>
              </TableRow>
            )) : data?.filter((item) => item.firstname.toLowerCase().includes(searchVal.toLowerCase())).map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableHead>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={item.imageUrl} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableHead>
                <TableHead>{item.lastname}</TableHead>
                <TableHead>{item.firstname}</TableHead>
                <TableHead>{item.email}</TableHead>
                <TableHead className="w-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="w-8 h-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => navigator.clipboard.writeText(item.email)}>Copy Email</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => { setChangeModalOpen(true); setEditingId(item) }}>Edit</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => { setDeleteModalOpen(true); setDeletingId(item) }}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableHead>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <UserChangeDialog open={changeModalOpen} onClose={setChangeModalOpen} onChange={render} data={editingId} />
      <UserDeleteDialog open={deleteModalOpen} onClose={setDeleteModalOpen} onDelete={render} data={deletingId}/>
    </div>
  );
}