import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

export const UserChangeDialog = ({ open, onClose, onChange, data }) => {
  const [image, setImage] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const request = () => {
    fetch(`http://localhost:3000/api/users/${data.id}`, {
      method: "PUT",
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
      .then((resData) => {
        onChange("change", resData.data)
      })
  }
  useEffect(() => {
    setEmail(data.email)
    setFirstname(data.firstname)
    setLastname(data.lastname)
    setImage(data.imageUrl)
  }, [data])


  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={(e) => {
          e.preventDefault();
          request();
          onClose(false)
        }}>
          <DialogHeader>
            <DialogTitle>Change user</DialogTitle>
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
            <Button onClick={() => { onClose(false) }} variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" >Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
