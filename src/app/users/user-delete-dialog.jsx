import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const UserDeleteDialog = ({ open, onClose, onDelete, data}) => {

  const request = () => {
    fetch(`http://localhost:3000/api/users/${data.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json;"
      }
    }).then(() => onDelete("delete", data.id))
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[325px]">
        <form action="" onSubmit={(e) => {
          e.preventDefault();
          request();
          onClose(false);
        }}>
          <DialogHeader>
            <DialogTitle className="text-center">Are you sure?</DialogTitle>
          </DialogHeader>
          <DialogFooter className="pt-10 min-sm:justify-around">
            <Button onClick={() => onClose(false)} variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="destructive" type="submit">Delete</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
