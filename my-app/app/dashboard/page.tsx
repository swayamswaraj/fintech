"use client";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Shield,
  Edit,
  Camera,
  TrendingUp,
  DollarSign,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";


const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const profileData = {
  name: "Alexander Mitchell",
  email: "alex.mitchell@email.com",
  phone: "+1 (555) 234-5678",
  location: "San Francisco, CA",
  joinDate: "January 2023",
  occupation: "Senior Portfolio Manager",
  accountType: "Premium",
  bio: "Experienced investor with 12+ years in wealth management. Passionate about sustainable investing and portfolio diversification strategies.",
  stats: {
    totalBalance: "$2,847,350",
    monthlyReturn: "+4.2%",
    portfolioCount: 8,
    riskScore: "Moderate",
  },
};

const recentActivity = [
  { action: "Deposited $5,000", date: "2 hours ago", type: "deposit" },
  { action: "Sold AAPL (50 shares)", date: "1 day ago", type: "sell" },
  { action: "Bought MSFT (30 shares)", date: "2 days ago", type: "buy" },
  { action: "Dividend received — $312", date: "5 days ago", type: "dividend" },
  { action: "Rebalanced Growth Portfolio", date: "1 week ago", type: "rebalance" },
];

const quickStats = [
  { label: "Total Balance", value: "$2,847,350", icon: DollarSign, change: "+12.4%", positive: true },
  { label: "Monthly Return", value: "+4.2%", icon: TrendingUp, change: "+0.8%", positive: true },
  { label: "Portfolios", value: "8", icon: PieChart, change: "+2", positive: true },
  { label: "Risk Score", value: "Moderate", icon: Shield, change: "Stable", positive: true },
];

const Dashboard = () => {
    const router = useRouter();

    const handleLogout = async () => {
      await signOut(auth);
      router.push("/login");
    };

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <button onClick={() => router.push("/")} className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">W</span>
            </div>
            <span className="text-xl font-bold text-foreground">WealthFlow</span>
          </button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Separator orientation="vertical" className="mx-1 h-6" />
            <Avatar className="h-9 w-9 cursor-pointer ring-2 ring-accent/30">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback className="bg-accent text-accent-foreground text-sm font-bold">AM</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Welcome section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back, <span className="text-accent">Alexander</span>
          </h1>
          <p className="mt-1 text-muted-foreground">Here's your financial overview for today.</p>
        </motion.div>

        {/* Quick stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickStats.map((stat, i) => (
            <motion.div key={stat.label} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}>
              <Card className="group relative overflow-hidden transition-shadow hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-xl font-bold text-foreground">{stat.value}</p>
                    <div className="mt-0.5 flex items-center gap-1">
                      {stat.positive ? (
                        <ArrowUpRight className="h-3 w-3 text-success" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 text-destructive" />
                      )}
                      <span className="text-xs font-medium text-success">{stat.change}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Profile card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="lg:col-span-1"
          >
            <Card className="overflow-hidden">
              {/* Cover */}
              <div className="relative h-28 bg-gradient-to-br from-primary via-navy-light to-navy-dark">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNnKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-50" />
              </div>
              <div className="relative px-6 pb-6">
                {/* Avatar */}
                <div className="relative -mt-14 mb-4 flex items-end justify-between">
                  <div className="relative">
                    <Avatar className="h-24 w-24 border-4 border-card shadow-lg">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" />
                      <AvatarFallback className="bg-accent text-accent-foreground text-2xl font-bold">AM</AvatarFallback>
                    </Avatar>
                    <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md transition-transform hover:scale-110">
                      <Camera className="h-4 w-4" />
                    </button>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <Edit className="h-3.5 w-3.5" />
                    Edit
                  </Button>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-foreground">{profileData.name}</h2>
                    <Badge className="bg-accent/15 text-accent hover:bg-accent/20 border-0 text-xs">
                      {profileData.accountType}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{profileData.occupation}</p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{profileData.bio}</p>

                <Separator className="my-5" />

                {/* Details */}
                <div className="space-y-3.5">
                  {[
                    { icon: Mail, label: profileData.email },
                    { icon: Phone, label: profileData.phone },
                    { icon: MapPin, label: profileData.location },
                    { icon: Calendar, label: `Joined ${profileData.joinDate}` },
                    { icon: Briefcase, label: profileData.occupation },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 text-sm">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted">
                        <item.icon className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <span className="truncate text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>

                <Separator className="my-5" />

                <Button variant="ghost" onClick={handleLogout} className="w-full justify-start gap-2 text-destructive hover:bg-destructive/10 hover:text-destructive">
                    <LogOut className="h-4 w-4" />
                    Sign Out
                </Button>

              </div>
            </Card>
          </motion.div>

          {/* Right panel */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
            className="lg:col-span-2"
          >
            <Tabs defaultValue="activity" className="space-y-4">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>

              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {recentActivity.map((item, i) => (
                      <motion.div
                        key={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={i}
                      >
                        <div className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-muted/50">
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-9 w-9 items-center justify-center rounded-full ${
                                item.type === "deposit" || item.type === "dividend" || item.type === "buy"
                                  ? "bg-success/10 text-success"
                                  : item.type === "sell"
                                  ? "bg-destructive/10 text-destructive"
                                  : "bg-accent/10 text-accent"
                              }`}
                            >
                              {item.type === "deposit" || item.type === "dividend" ? (
                                <DollarSign className="h-4 w-4" />
                              ) : item.type === "buy" ? (
                                <ArrowUpRight className="h-4 w-4" />
                              ) : item.type === "sell" ? (
                                <ArrowDownRight className="h-4 w-4" />
                              ) : (
                                <PieChart className="h-4 w-4" />
                              )}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">{item.action}</p>
                              <p className="text-xs text-muted-foreground">{item.date}</p>
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Security Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { title: "Two-Factor Authentication", desc: "Add an extra layer of security", enabled: true },
                      { title: "Biometric Login", desc: "Use fingerprint or face recognition", enabled: false },
                      { title: "Login Notifications", desc: "Get notified of new sign-ins", enabled: true },
                    ].map((setting) => (
                      <div key={setting.title} className="flex items-center justify-between rounded-lg border border-border p-4">
                        <div>
                          <p className="text-sm font-medium text-foreground">{setting.title}</p>
                          <p className="text-xs text-muted-foreground">{setting.desc}</p>
                        </div>
                        <Badge variant={setting.enabled ? "default" : "secondary"} className={setting.enabled ? "bg-success/15 text-success hover:bg-success/20 border-0" : ""}>
                          {setting.enabled ? "Enabled" : "Disabled"}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { title: "Email Notifications", desc: "Receive updates via email" },
                      { title: "Dark Mode", desc: "Toggle dark theme" },
                      { title: "Currency", desc: "USD ($)" },
                      { title: "Language", desc: "English" },
                    ].map((pref) => (
                      <div key={pref.title} className="flex items-center justify-between rounded-lg border border-border p-4">
                        <div>
                          <p className="text-sm font-medium text-foreground">{pref.title}</p>
                          <p className="text-xs text-muted-foreground">{pref.desc}</p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
