
import React from "react";
import SellerLayout from "@/components/layout/SellerLayout";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Store } from "lucide-react";

const SellerAccount = () => {
  const { user } = useAuth();

  // In a real application, we would fetch the seller's profile data from an API
  const sellerProfile = {
    name: user?.name || "Seller Name",
    email: user?.email || "seller@example.com",
    shopName: "Craft Haven",
    joinedDate: "January 2025",
    description: "Specializing in handmade crafts and artisanal products from local artisans.",
    address: "123 Artisan Street, Craftsville",
    phoneNumber: "+1 (555) 123-4567",
    bankAccount: "****1234",
  };

  return (
    <SellerLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pahacraft-900">Seller Account</h1>
          <Button className="bg-pahacraft-600 hover:bg-pahacraft-700">
            <Edit className="mr-2 h-4 w-4" /> Edit Profile
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Store className="mr-2 h-5 w-5 text-pahacraft-600" />
                Shop Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Shop Name</h3>
                <p className="text-base">{sellerProfile.shopName}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Description</h3>
                <p className="text-base">{sellerProfile.description}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Joined</h3>
                <p className="text-base">{sellerProfile.joinedDate}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Name</h3>
                <p className="text-base">{sellerProfile.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                <p className="text-base">{sellerProfile.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Address</h3>
                <p className="text-base">{sellerProfile.address}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Phone Number</h3>
                <p className="text-base">{sellerProfile.phoneNumber}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Payment Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Bank Account</h3>
                <p className="text-base">{sellerProfile.bankAccount}</p>
              </div>
              <Button variant="outline">Update Payment Details</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </SellerLayout>
  );
};

export default SellerAccount;
