import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

// export const UserCreateDialog = (props, { open, onClose }) => {
export const UserCreateDialog = ({ open, onClose, onCreate }) => {
  const [image, setImage] = useState("https://preview.redd.it/i-used-to-have-this-v1-plush-that-i-used-to-pour-fresh-v0-hgvwy76gr3k91.jpg?width=640&crop=smart&auto=webp&s=9cef1f14355e8ed84ae3f2e8fff6850f13d64b92");
  const [firstname, setFirstname] = useState("Goob");
  const [lastname, setLastname] = useState("V1");
  const [email, setEmail] = useState("GoobV1@gmail.com");
  const request = () => {
    fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        "firstname": `${firstname}`,
        "lastname": `${lastname}`,
        "email": `${email}`,
        "imageUrl": `${image}`
      }),
      headers: {
        "Content-type": "application/json;"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        onCreate("create", data.data)
      })
  }
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <form action="" onSubmit={(e) => {
          e.preventDefault();
          request();
          onClose(false);
        }}>
          <DialogHeader>
            <DialogTitle>Create user</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Image</Label>
              <Input id="name" defaultValue={image} onInput={(e) => { setImage(e.target.value) }} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">First name</Label>
              <Input id="name" defaultValue={firstname} onInput={(e) => { setFirstname(e.target.value) }} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username">Last name</Label>
              <Input id="username" defaultValue={lastname} onInput={(e) => { setLastname(e.target.value) }} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">email</Label>
              <Input id="name" defaultValue={email} onInput={(e) => { setEmail(e.target.value) }} />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => onClose(false)} variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
