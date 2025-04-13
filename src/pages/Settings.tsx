
import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { SpaceshipToggle } from "@/components/SpaceshipToggle";
import { Bell, Eye, Settings as SettingsIcon, User } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">
              Customize your TaskFlow experience
            </p>
          </div>

          <Tabs defaultValue="appearance">
            <TabsList className="grid grid-cols-4 mb-8 w-full">
              <TabsTrigger value="appearance" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span className="hidden sm:inline">Appearance</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline">Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="account" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Account</span>
              </TabsTrigger>
              <TabsTrigger value="general" className="flex items-center gap-2">
                <SettingsIcon className="h-4 w-4" />
                <span className="hidden sm:inline">General</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="appearance">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Appearance Settings</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Dark Mode</h3>
                      <p className="text-sm text-muted-foreground">
                        Toggle between light and dark mode
                      </p>
                    </div>
                    <SpaceshipToggle />
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Text Size</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Adjust the size of text elements
                    </p>
                    <Slider 
                      defaultValue={[16]} 
                      max={24} 
                      min={12} 
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-xs">Small</span>
                      <span className="text-xs">Medium</span>
                      <span className="text-xs">Large</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Animations</h3>
                    <div className="flex items-center space-x-2">
                      <Switch id="animations" defaultChecked />
                      <Label htmlFor="animations">
                        Enable animations and transitions
                      </Label>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Task Reminders</h3>
                      <p className="text-sm text-muted-foreground">
                        Get notified about upcoming tasks
                      </p>
                    </div>
                    <Switch id="task-reminders" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Daily Summary</h3>
                      <p className="text-sm text-muted-foreground">
                        Receive a daily summary of your tasks
                      </p>
                    </div>
                    <Switch id="daily-summary" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Weekly Report</h3>
                      <p className="text-sm text-muted-foreground">
                        Get weekly productivity insights
                      </p>
                    </div>
                    <Switch id="weekly-report" defaultChecked />
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Quiet Hours</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      No notifications during these hours
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="from-time">From</Label>
                        <Input id="from-time" type="time" defaultValue="22:00" />
                      </div>
                      <div>
                        <Label htmlFor="to-time">To</Label>
                        <Input id="to-time" type="time" defaultValue="07:00" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="account">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" defaultValue="User" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" defaultValue="user@example.com" />
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="outline">Update Account</Button>
                  </div>
                  
                  <div className="pt-6 border-t mt-6">
                    <h3 className="font-medium text-red-500 mb-2">Danger Zone</h3>
                    <Button variant="destructive">Delete Account</Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="general">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">General Settings</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Start Week On Monday</h3>
                      <p className="text-sm text-muted-foreground">
                        Display Monday as the first day of the week
                      </p>
                    </div>
                    <Switch id="start-week-monday" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">24-hour Time Format</h3>
                      <p className="text-sm text-muted-foreground">
                        Use 24-hour time format instead of AM/PM
                      </p>
                    </div>
                    <Switch id="24-hour-format" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Automatically Archive Completed Tasks</h3>
                      <p className="text-sm text-muted-foreground">
                        Move completed tasks to archive after 7 days
                      </p>
                    </div>
                    <Switch id="auto-archive" defaultChecked />
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Settings;
